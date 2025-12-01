/**
 * 명언 검색 및 랜덤 추천 기능
 * Search and Random Quote Feature
 */

class QuoteSearchManager {
    constructor() {
        this.quotes = [];
        this.searchIndex = null;
        this.dailyQuote = null;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.buildQuoteDatabase();
            this.renderSearchUI();
            this.initDailyQuote();
        });
    }

    /**
     * 모든 명언을 수집하여 검색 가능한 데이터베이스 구축
     */
    buildQuoteDatabase() {
        const allQuotes = document.querySelectorAll('.quote-card p, .quote-card-academic p, .context-card p');

        allQuotes.forEach((quoteElement, index) => {
            const card = quoteElement.closest('.quote-card, .quote-card-academic, .context-card');
            const characterSection = quoteElement.closest('.character-content');
            const sourceElement = card?.querySelector('.quote-source, .context-source');

            if (!card || !characterSection) return;

            const quote = {
                id: `quote-${index}`,
                text: quoteElement.textContent.trim(),
                source: sourceElement?.textContent.trim() || '',
                character: characterSection.id || 'unknown',
                element: card,
                searchText: `${quoteElement.textContent} ${sourceElement?.textContent || ''}`.toLowerCase()
            };

            this.quotes.push(quote);
        });

        console.log(`📚 ${this.quotes.length}개의 명언이 인덱싱되었습니다.`);
    }

    /**
     * 검색 UI 렌더링
     */
    renderSearchUI() {
        // 네비게이션 바에 검색 버튼 추가
        const navActions = document.querySelector('.nav-actions');
        if (!navActions) return;

        const searchButton = document.createElement('button');
        searchButton.className = 'search-toggle';
        searchButton.id = 'searchToggle';
        searchButton.innerHTML = '🔍';
        searchButton.title = '명언 검색';
        searchButton.setAttribute('aria-label', '명언 검색');
        searchButton.style.cssText = `
            background: transparent;
            border: none;
            font-size: 1.25rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: all 0.3s ease;
        `;

        // 북마크 버튼 앞에 삽입
        const bookmarkButton = document.getElementById('bookmarkToggle');
        if (bookmarkButton) {
            navActions.insertBefore(searchButton, bookmarkButton);
        } else {
            navActions.insertBefore(searchButton, navActions.firstChild);
        }

        searchButton.addEventListener('click', () => this.toggleSearchPanel());

        // 검색 패널 생성
        this.createSearchPanel();
    }

    /**
     * 검색 패널 생성
     */
    createSearchPanel() {
        const searchPanel = document.createElement('div');
        searchPanel.id = 'searchPanel';
        searchPanel.className = 'search-panel';
        searchPanel.innerHTML = `
            <div class="search-panel-content">
                <div class="search-header">
                    <h3>명언 검색</h3>
                    <button class="search-close" id="searchClose" aria-label="검색 닫기">✕</button>
                </div>
                <div class="search-input-container">
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="명언이나 키워드를 입력하세요..."
                        aria-label="명언 검색 입력"
                    >
                    <button class="search-clear" id="searchClear" style="display: none;" aria-label="검색어 지우기">✕</button>
                </div>
                <div class="search-filters">
                    <button class="filter-btn active" data-character="all">전체</button>
                    <button class="filter-btn" data-character="confucius">공자</button>
                    <button class="filter-btn" data-character="laozi">노자</button>
                    <button class="filter-btn" data-character="buddha">석가모니</button>
                </div>
                <div id="searchResults" class="search-results">
                    <div class="search-placeholder">
                        <p>🔍 검색어를 입력하면 관련 명언이 표시됩니다</p>
                        <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">총 ${this.quotes.length}개의 명언이 검색 가능합니다</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(searchPanel);

        // 스타일 추가
        this.addSearchStyles();

        // 이벤트 리스너 설정
        this.setupSearchEvents();
    }

    /**
     * 검색 패널 스타일
     */
    addSearchStyles() {
        if (document.getElementById('search-panel-styles')) return;

        const style = document.createElement('style');
        style.id = 'search-panel-styles';
        style.textContent = `
            .search-panel {
                position: fixed;
                top: 0;
                right: -100%;
                width: 100%;
                max-width: 500px;
                height: 100vh;
                background: white;
                box-shadow: -5px 0 20px rgba(0,0,0,0.1);
                z-index: 10000;
                transition: right 0.3s ease;
                overflow-y: auto;
            }

            .search-panel.active {
                right: 0;
            }

            .search-panel-content {
                padding: 2rem;
            }

            .search-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
            }

            .search-header h3 {
                margin: 0;
                font-size: 1.5rem;
                color: #1a1a1a;
            }

            .search-close {
                background: #f5f5f5;
                border: none;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                font-size: 1.25rem;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .search-close:hover {
                background: #e0e0e0;
                transform: rotate(90deg);
            }

            .search-input-container {
                position: relative;
                margin-bottom: 1rem;
            }

            #searchInput {
                width: 100%;
                padding: 1rem 3rem 1rem 1rem;
                font-size: 1rem;
                border: 2px solid #e0e0e0;
                border-radius: 12px;
                transition: all 0.3s ease;
                font-family: inherit;
            }

            #searchInput:focus {
                outline: none;
                border-color: #c9a961;
                box-shadow: 0 0 0 3px rgba(201, 169, 97, 0.1);
            }

            .search-clear {
                position: absolute;
                right: 1rem;
                top: 50%;
                transform: translateY(-50%);
                background: #e0e0e0;
                border: none;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                font-size: 0.875rem;
                cursor: pointer;
                transition: background 0.2s ease;
            }

            .search-clear:hover {
                background: #d0d0d0;
            }

            .search-filters {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 1.5rem;
                flex-wrap: wrap;
            }

            .filter-btn {
                padding: 0.5rem 1rem;
                border: 2px solid #e0e0e0;
                background: white;
                border-radius: 20px;
                cursor: pointer;
                font-size: 0.875rem;
                transition: all 0.2s ease;
                font-family: inherit;
            }

            .filter-btn:hover {
                border-color: #c9a961;
                background: #fafafa;
            }

            .filter-btn.active {
                background: #c9a961;
                border-color: #c9a961;
                color: white;
            }

            .search-results {
                min-height: 200px;
            }

            .search-placeholder {
                text-align: center;
                padding: 3rem 1rem;
                color: #666;
            }

            .search-result-item {
                padding: 1rem;
                border: 1px solid #e0e0e0;
                border-radius: 12px;
                margin-bottom: 1rem;
                cursor: pointer;
                transition: all 0.2s ease;
                background: white;
            }

            .search-result-item:hover {
                border-color: #c9a961;
                box-shadow: 0 4px 12px rgba(201, 169, 97, 0.1);
                transform: translateY(-2px);
            }

            .search-result-text {
                font-size: 1rem;
                line-height: 1.6;
                margin-bottom: 0.5rem;
                color: #1a1a1a;
            }

            .search-result-meta {
                display: flex;
                gap: 1rem;
                font-size: 0.875rem;
                color: #666;
            }

            .search-result-character {
                font-weight: 600;
            }

            .search-highlight {
                background: #fff3cd;
                padding: 0 0.25rem;
                border-radius: 3px;
            }

            .search-no-results {
                text-align: center;
                padding: 3rem 1rem;
                color: #999;
            }

            @media (max-width: 768px) {
                .search-panel {
                    max-width: 100%;
                }

                .search-panel-content {
                    padding: 1.5rem;
                }
            }

            /* 다크 모드 지원 */
            .dark-mode .search-panel {
                background: #1a1a1a;
                color: #e0e0e0;
            }

            .dark-mode .search-header h3,
            .dark-mode .search-result-text {
                color: #e0e0e0;
            }

            .dark-mode #searchInput {
                background: #2a2a2a;
                color: #e0e0e0;
                border-color: #3a3a3a;
            }

            .dark-mode .search-close,
            .dark-mode .search-clear {
                background: #2a2a2a;
                color: #e0e0e0;
            }

            .dark-mode .filter-btn {
                background: #2a2a2a;
                border-color: #3a3a3a;
                color: #e0e0e0;
            }

            .dark-mode .filter-btn.active {
                background: #c9a961;
                color: #1a1a1a;
            }

            .dark-mode .search-result-item {
                background: #2a2a2a;
                border-color: #3a3a3a;
            }
        `;

        document.head.appendChild(style);
    }

    /**
     * 검색 이벤트 설정
     */
    setupSearchEvents() {
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');
        const searchClose = document.getElementById('searchClose');
        const filterButtons = document.querySelectorAll('.filter-btn');

        let currentFilter = 'all';

        // 검색 입력
        searchInput?.addEventListener('input', (e) => {
            const query = e.target.value.trim();

            if (query.length > 0) {
                searchClear.style.display = 'block';
                this.performSearch(query, currentFilter);
            } else {
                searchClear.style.display = 'none';
                this.showPlaceholder();
            }
        });

        // 검색어 지우기
        searchClear?.addEventListener('click', () => {
            searchInput.value = '';
            searchClear.style.display = 'none';
            this.showPlaceholder();
            searchInput.focus();
        });

        // 패널 닫기
        searchClose?.addEventListener('click', () => {
            this.toggleSearchPanel();
        });

        // 필터 버튼
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.character;

                const query = searchInput.value.trim();
                if (query.length > 0) {
                    this.performSearch(query, currentFilter);
                }
            });
        });

        // ESC 키로 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const panel = document.getElementById('searchPanel');
                if (panel?.classList.contains('active')) {
                    this.toggleSearchPanel();
                }
            }
        });
    }

    /**
     * 검색 패널 토글
     */
    toggleSearchPanel() {
        const panel = document.getElementById('searchPanel');
        const searchInput = document.getElementById('searchInput');

        if (panel) {
            panel.classList.toggle('active');

            if (panel.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                setTimeout(() => searchInput?.focus(), 300);
            } else {
                document.body.style.overflow = '';
            }
        }
    }

    /**
     * 검색 수행
     */
    performSearch(query, characterFilter = 'all') {
        const lowerQuery = query.toLowerCase();

        let results = this.quotes.filter(quote => {
            const matchesQuery = quote.searchText.includes(lowerQuery);
            const matchesFilter = characterFilter === 'all' || quote.character === characterFilter;
            return matchesQuery && matchesFilter;
        });

        this.displaySearchResults(results, query);
    }

    /**
     * 검색 결과 표시
     */
    displaySearchResults(results, query) {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="search-no-results">
                    <p>🔍 검색 결과가 없습니다</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">다른 키워드로 검색해보세요</p>
                </div>
            `;
            return;
        }

        const characterNames = {
            confucius: '공자',
            laozi: '노자',
            buddha: '석가모니'
        };

        resultsContainer.innerHTML = results.map(result => {
            const highlightedText = this.highlightText(result.text, query);
            const characterName = characterNames[result.character] || result.character;

            return `
                <div class="search-result-item" data-quote-id="${result.id}" data-character="${result.character}">
                    <div class="search-result-text">${highlightedText}</div>
                    <div class="search-result-meta">
                        <span class="search-result-character">${characterName}</span>
                        ${result.source ? `<span class="search-result-source">${result.source}</span>` : ''}
                    </div>
                </div>
            `;
        }).join('');

        // 결과 클릭 이벤트
        resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const character = item.dataset.character;
                this.navigateToQuote(character, item);
            });
        });
    }

    /**
     * 텍스트 하이라이트
     */
    highlightText(text, query) {
        if (!query) return text;

        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    /**
     * 명언으로 이동
     */
    navigateToQuote(character, resultElement) {
        // 검색 패널 닫기
        this.toggleSearchPanel();

        // 해당 캐릭터 탭으로 이동
        const characterTab = document.querySelector(`[data-character="${character}"]`);
        if (characterTab) {
            characterTab.click();
        }

        // 잠시 후 스크롤
        setTimeout(() => {
            const quoteId = resultElement.dataset.quoteId;
            const quoteElement = this.quotes.find(q => q.id === quoteId)?.element;

            if (quoteElement) {
                quoteElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                // 하이라이트 효과
                quoteElement.style.animation = 'highlight-pulse 1.5s ease';
                setTimeout(() => {
                    quoteElement.style.animation = '';
                }, 1500);
            }
        }, 300);
    }

    /**
     * 플레이스홀더 표시
     */
    showPlaceholder() {
        const resultsContainer = document.getElementById('searchResults');
        if (resultsContainer) {
            resultsContainer.innerHTML = `
                <div class="search-placeholder">
                    <p>🔍 검색어를 입력하면 관련 명언이 표시됩니다</p>
                    <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">총 ${this.quotes.length}개의 명언이 검색 가능합니다</p>
                </div>
            `;
        }
    }

    /**
     * 오늘의 명언 초기화
     */
    initDailyQuote() {
        // 오늘 날짜 기반 시드
        const today = new Date().toDateString();
        const seed = this.hashCode(today);

        // 시드 기반 랜덤 인덱스
        const index = Math.abs(seed) % this.quotes.length;
        this.dailyQuote = this.quotes[index];

        // 오늘의 명언 표시
        this.renderDailyQuote();
    }

    /**
     * 오늘의 명언 렌더링
     */
    renderDailyQuote() {
        if (!this.dailyQuote) return;

        // 히어로 섹션 하단에 오늘의 명언 배너 추가
        const heroSections = document.querySelectorAll('.hero-modern');

        heroSections.forEach((hero, index) => {
            if (index > 0) return; // 첫 번째 히어로 섹션에만 추가

            const existingBanner = hero.querySelector('.daily-quote-banner');
            if (existingBanner) return; // 이미 존재하면 스킵

            const characterNames = {
                confucius: '공자',
                laozi: '노자',
                buddha: '석가모니'
            };

            const dailyBanner = document.createElement('div');
            dailyBanner.className = 'daily-quote-banner';
            dailyBanner.innerHTML = `
                <button class="daily-quote-close" onclick="this.closest('.daily-quote-banner').remove()" aria-label="닫기">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div class="daily-quote-content">
                    <div class="daily-quote-label">💫 오늘의 명언</div>
                    <p class="daily-quote-text">"${this.dailyQuote.text}"</p>
                    <p class="daily-quote-source">- ${characterNames[this.dailyQuote.character]} ${this.dailyQuote.source}</p>
                    <button class="daily-quote-more" onclick="window.quoteSearchManager.showMoreQuotes()">
                        더 많은 명언 보기 →
                    </button>
                </div>
            `;

            hero.appendChild(dailyBanner);
        });

        // 스타일 추가
        this.addDailyQuoteStyles();
    }

    /**
     * 오늘의 명언 스타일
     */
    addDailyQuoteStyles() {
        if (document.getElementById('daily-quote-styles')) return;

        const style = document.createElement('style');
        style.id = 'daily-quote-styles';
        style.textContent = `
            .daily-quote-banner {
                position: absolute;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-radius: 16px;
                padding: 2rem;
                max-width: 600px;
                width: 90%;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                z-index: 10;
            }

            .daily-quote-close {
                position: absolute;
                top: 0.75rem;
                right: 0.75rem;
                background: rgba(0, 0, 0, 0.05);
                border: none;
                border-radius: 50%;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                color: #666;
            }

            .daily-quote-close:hover {
                background: rgba(0, 0, 0, 0.1);
                color: #333;
                transform: rotate(90deg);
            }

            .daily-quote-label {
                font-size: 0.875rem;
                font-weight: 600;
                color: #c9a961;
                margin-bottom: 1rem;
                text-align: center;
            }

            .daily-quote-text {
                font-size: 1.125rem;
                line-height: 1.8;
                color: #1a1a1a;
                margin-bottom: 0.75rem;
                text-align: center;
                font-style: italic;
            }

            .daily-quote-source {
                font-size: 0.875rem;
                color: #666;
                text-align: center;
                margin-bottom: 1rem;
            }

            .daily-quote-more {
                display: block;
                margin: 0 auto;
                background: #c9a961;
                color: white;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 8px;
                font-size: 0.875rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: inherit;
            }

            .daily-quote-more:hover {
                background: #b89851;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(201, 169, 97, 0.3);
            }

            @media (max-width: 768px) {
                .daily-quote-banner {
                    padding: 1.5rem;
                    bottom: 1rem;
                }

                .daily-quote-text {
                    font-size: 1rem;
                }
            }

            /* 하이라이트 애니메이션 */
            @keyframes highlight-pulse {
                0%, 100% {
                    box-shadow: 0 0 0 0 rgba(201, 169, 97, 0);
                }
                50% {
                    box-shadow: 0 0 0 10px rgba(201, 169, 97, 0.3);
                }
            }

            /* 다크 모드 */
            .dark-mode .daily-quote-banner {
                background: rgba(26, 26, 26, 0.95);
            }

            .dark-mode .daily-quote-text {
                color: #e0e0e0;
            }

            .dark-mode .daily-quote-source {
                color: #999;
            }
        `;

        document.head.appendChild(style);
    }

    /**
     * 더 많은 명언 보기
     */
    showMoreQuotes() {
        const searchToggle = document.getElementById('searchToggle');
        if (searchToggle) {
            searchToggle.click();
        }
    }

    /**
     * 문자열 해시 함수
     */
    hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash;
    }
}

// 전역 인스턴스 생성
window.quoteSearchManager = new QuoteSearchManager();
