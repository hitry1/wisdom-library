// ===== 명언 북마크 기능 =====

class BookmarkManager {
    constructor() {
        this.storageKey = 'bookmarked_quotes';
        this.bookmarks = this.loadBookmarks();
        this.init();
    }

    init() {
        // 북마크 버튼 이벤트 추가
        document.addEventListener('DOMContentLoaded', () => {
            this.addBookmarkButtons();
            this.renderBookmarkUI();
        });
    }

    // 북마크 로드
    loadBookmarks() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('북마크 로드 실패:', error);
            return [];
        }
    }

    // 북마크 저장
    saveBookmarks() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.bookmarks));
            
            // Service Worker에게 동기화 요청
            if ('serviceWorker' in navigator && 'sync' in navigator.serviceWorker) {
                navigator.serviceWorker.ready.then(registration => {
                    return registration.sync.register('sync-bookmarks');
                }).catch(err => console.log('Sync registration failed:', err));
            }
        } catch (error) {
            console.error('북마크 저장 실패:', error);
        }
    }

    // 북마크 추가/제거
    toggleBookmark(quoteData) {
        const index = this.bookmarks.findIndex(b => b.id === quoteData.id);
        
        if (index >= 0) {
            // 이미 북마크됨 - 제거
            this.bookmarks.splice(index, 1);
            this.showToast('북마크가 제거되었습니다', 'info');
            return false;
        } else {
            // 북마크 추가
            this.bookmarks.unshift({
                ...quoteData,
                bookmarkedAt: Date.now()
            });
            this.showToast('북마크에 추가되었습니다', 'success');
            return true;
        }
    }

    // 북마크 여부 확인
    isBookmarked(quoteId) {
        return this.bookmarks.some(b => b.id === quoteId);
    }

    // 북마크 버튼 추가
    addBookmarkButtons() {
        // 모든 명언 카드에 북마크 및 복사 버튼 추가
        const quoteCards = document.querySelectorAll('.quote-card, .quote-card-academic, .context-card');
        
        quoteCards.forEach((card, index) => {
            // 이미 버튼이 있으면 스킵
            if (card.querySelector('.bookmark-btn')) return;
            
            const character = card.closest('.character-content')?.id || 'unknown';
            const quoteText = card.querySelector('p')?.textContent || '';
            const source = card.querySelector('.quote-source, .context-source')?.textContent || '';
            
            const quoteId = `${character}-${index}`;
            const isBookmarked = this.isBookmarked(quoteId);
            
            const bookmarkBtn = document.createElement('button');
            bookmarkBtn.className = 'bookmark-btn';
            bookmarkBtn.setAttribute('data-quote-id', quoteId);
            bookmarkBtn.innerHTML = isBookmarked ? '★' : '☆';
            bookmarkBtn.title = isBookmarked ? '북마크 제거' : '북마크 추가';
            bookmarkBtn.style.cssText = `
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: rgba(255, 255, 255, 0.9);
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                font-size: 1.5rem;
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 10;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            `;
            
            bookmarkBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const quoteData = {
                    id: quoteId,
                    character: character,
                    text: quoteText,
                    source: source,
                    index: index
                };
                
                const added = this.toggleBookmark(quoteData);
                bookmarkBtn.innerHTML = added ? '★' : '☆';
                bookmarkBtn.title = added ? '북마크 제거' : '북마크 추가';
                
                this.saveBookmarks();
                this.updateBookmarkCount();
                
                // Google Analytics 이벤트
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'bookmark_toggle', {
                        'event_category': 'Engagement',
                        'event_label': character,
                        'bookmark_action': added ? 'add' : 'remove'
                    });
                }
            });
            
            // 호버 효과
            bookmarkBtn.addEventListener('mouseenter', () => {
                bookmarkBtn.style.transform = 'scale(1.1)';
                bookmarkBtn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            });
            
            bookmarkBtn.addEventListener('mouseleave', () => {
                bookmarkBtn.style.transform = 'scale(1)';
                bookmarkBtn.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            });
            
            // 카드를 상대 위치로 설정
            card.style.position = 'relative';
            card.appendChild(bookmarkBtn);

            // 복사 버튼 추가
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-quote-btn';
            copyBtn.innerHTML = '📋';
            copyBtn.title = '명언 복사';
            copyBtn.style.cssText = `
                position: absolute;
                top: 1rem;
                right: 4rem;
                background: rgba(255, 255, 255, 0.9);
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                font-size: 1.3rem;
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 10;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            `;

            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();

                // 명언 텍스트 수집
                let textToCopy = quoteText;
                if (source) {
                    textToCopy += `\n\n- ${source}`;
                }

                // 클립보드에 복사
                navigator.clipboard.writeText(textToCopy).then(() => {
                    this.showToast('명언이 복사되었습니다', 'success');
                    copyBtn.innerHTML = '✅';
                    setTimeout(() => {
                        copyBtn.innerHTML = '📋';
                    }, 2000);

                    // Google Analytics 이벤트
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'copy_quote', {
                            'event_category': 'Engagement',
                            'event_label': character
                        });
                    }
                }).catch(err => {
                    console.error('복사 실패:', err);
                    this.showToast('복사에 실패했습니다', 'error');
                });
            });

            // 호버 효과
            copyBtn.addEventListener('mouseenter', () => {
                copyBtn.style.transform = 'scale(1.1)';
                copyBtn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            });

            copyBtn.addEventListener('mouseleave', () => {
                copyBtn.style.transform = 'scale(1)';
                copyBtn.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            });

            card.appendChild(copyBtn);
        });
    }

    // 북마크 UI 렌더링
    renderBookmarkUI() {
        // 북마크 패널이 이미 있으면 업데이트만
        let bookmarkPanel = document.getElementById('bookmark-panel');
        
        if (!bookmarkPanel) {
            bookmarkPanel = document.createElement('div');
            bookmarkPanel.id = 'bookmark-panel';
            bookmarkPanel.style.cssText = `
                position: fixed;
                top: 0;
                right: -400px;
                width: 400px;
                height: 100vh;
                background: white;
                box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
                transition: right 0.3s ease;
                z-index: 9998;
                overflow-y: auto;
                padding: 2rem;
            `;
            document.body.appendChild(bookmarkPanel);
        }
        
        bookmarkPanel.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h2 style="margin: 0; font-size: 1.5rem;">📌 내 북마크</h2>
                <button onclick="window.bookmarkManager.closeBookmarkPanel()" 
                        style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">
                    ✕
                </button>
            </div>
            
            ${this.bookmarks.length === 0 ? `
                <div style="text-align: center; padding: 4rem 2rem; color: #6a6a6a;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📚</div>
                    <p>아직 북마크한 명언이 없습니다.</p>
                    <p style="font-size: 0.9rem;">별 모양(☆)을 클릭해서 명언을 저장하세요!</p>
                </div>
            ` : `
                <div style="margin-bottom: 1rem; color: #6a6a6a; font-size: 0.9rem;">
                    총 ${this.bookmarks.length}개의 명언
                </div>
                ${this.bookmarks.map(bookmark => `
                    <div style="background: #f5f5f5; padding: 1.5rem; border-radius: 12px; 
                                margin-bottom: 1rem; position: relative;">
                        <div style="color: #8B2635; font-weight: 600; margin-bottom: 0.5rem; text-transform: uppercase;">
                            ${this.getCharacterName(bookmark.character)}
                        </div>
                        <p style="margin: 0.5rem 0; line-height: 1.6;">${bookmark.text}</p>
                        <div style="font-size: 0.85rem; color: #6a6a6a; margin-top: 0.5rem;">
                            ${bookmark.source}
                        </div>
                        <button onclick="window.bookmarkManager.removeBookmark('${bookmark.id}')"
                                style="position: absolute; top: 1rem; right: 1rem; background: white; 
                                       border: none; border-radius: 50%; width: 32px; height: 32px; 
                                       cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            ❌
                        </button>
                    </div>
                `).join('')}
                
                <button onclick="window.bookmarkManager.exportBookmarks()" 
                        style="width: 100%; padding: 1rem; background: linear-gradient(135deg, #8B2635 0%, #D4AF37 100%); 
                               color: white; border: none; border-radius: 12px; font-weight: 600; 
                               cursor: pointer; margin-top: 1rem;">
                    📤 북마크 내보내기
                </button>
            `}
        `;
    }

    // 북마크 패널 열기/닫기
    toggleBookmarkPanel() {
        const panel = document.getElementById('bookmark-panel');
        if (panel) {
            const isOpen = panel.style.right === '0px';
            panel.style.right = isOpen ? '-400px' : '0px';
            
            if (!isOpen) {
                this.renderBookmarkUI();
            }
        }
    }

    closeBookmarkPanel() {
        const panel = document.getElementById('bookmark-panel');
        if (panel) {
            panel.style.right = '-400px';
        }
    }

    // 북마크 제거
    removeBookmark(quoteId) {
        const index = this.bookmarks.findIndex(b => b.id === quoteId);
        if (index >= 0) {
            this.bookmarks.splice(index, 1);
            this.saveBookmarks();
            this.renderBookmarkUI();
            this.updateBookmarkButtons();
            this.updateBookmarkCount();
            this.showToast('북마크가 제거되었습니다', 'info');
        }
    }

    // 모든 북마크 버튼 업데이트
    updateBookmarkButtons() {
        document.querySelectorAll('.bookmark-btn').forEach(btn => {
            const quoteId = btn.getAttribute('data-quote-id');
            const isBookmarked = this.isBookmarked(quoteId);
            btn.innerHTML = isBookmarked ? '★' : '☆';
            btn.title = isBookmarked ? '북마크 제거' : '북마크 추가';
        });
    }

    // 북마크 개수 업데이트
    updateBookmarkCount() {
        const countBadge = document.getElementById('bookmark-count');
        if (countBadge) {
            countBadge.textContent = this.bookmarks.length;
            countBadge.style.display = this.bookmarks.length > 0 ? 'inline-block' : 'none';
        }
    }

    // 북마크 내보내기
    exportBookmarks() {
        const text = this.bookmarks.map(b => 
            `${this.getCharacterName(b.character)}\n\n${b.text}\n\n— ${b.source}\n\n---\n\n`
        ).join('');
        
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `동양사상가_북마크_${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.showToast('북마크를 다운로드했습니다', 'success');
        
        // Google Analytics 이벤트
        if (typeof gtag !== 'undefined') {
            gtag('event', 'bookmark_export', {
                'event_category': 'Engagement',
                'event_label': 'Export',
                'bookmark_count': this.bookmarks.length
            });
        }
    }

    // 사상가 이름 변환
    getCharacterName(id) {
        const names = {
            'confucius': '공자 (孔子)',
            'laozi': '노자 (老子)',
            'buddha': '석가모니 (釋迦牟尼)'
        };
        return names[id] || id;
    }

    // 토스트 메시지
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        const colors = {
            'success': '#4caf50',
            'info': '#2196f3',
            'warning': '#ff9800',
            'error': '#f44336'
        };
        
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${colors[type] || colors.info};
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            z-index: 10001;
            animation: slideDown 0.3s ease, fadeOut 0.3s ease 2.7s;
        `;
        toast.textContent = message;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
                to { transform: translateX(-50%) translateY(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(toast);
        
        setTimeout(() => toast.remove(), 3000);
    }
}

// 전역 인스턴스 생성
window.bookmarkManager = new BookmarkManager();


// ===== 공유 기능 =====

class ShareManager {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.addShareButtons();
        });
    }

    // 공유 버튼 추가
    addShareButtons() {
        const quoteCards = document.querySelectorAll('.quote-card, .context-card');
        
        quoteCards.forEach((card, index) => {
            // 이미 버튼이 있으면 스킵
            if (card.querySelector('.share-btn')) return;
            
            const character = card.closest('.character-content')?.id || 'unknown';
            const quoteText = card.querySelector('p')?.textContent || '';
            const source = card.querySelector('.quote-source, .context-source')?.textContent || '';
            
            const shareBtn = document.createElement('button');
            shareBtn.className = 'share-btn';
            shareBtn.innerHTML = '🔗';
            shareBtn.title = '공유하기';
            shareBtn.style.cssText = `
                position: absolute;
                top: 1rem;
                right: 60px;
                background: rgba(255, 255, 255, 0.9);
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                font-size: 1.25rem;
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 10;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            `;
            
            shareBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.shareQuote(character, quoteText, source);
            });
            
            // 호버 효과
            shareBtn.addEventListener('mouseenter', () => {
                shareBtn.style.transform = 'scale(1.1)';
                shareBtn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            });
            
            shareBtn.addEventListener('mouseleave', () => {
                shareBtn.style.transform = 'scale(1)';
                shareBtn.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            });
            
            card.appendChild(shareBtn);
        });
    }

    // 명언 공유
    async shareQuote(character, text, source) {
        const characterNames = {
            'confucius': '공자',
            'laozi': '노자',
            'buddha': '석가모니'
        };
        
        const characterName = characterNames[character] || character;
        const shareData = {
            title: `${characterName}의 명언`,
            text: `"${text}"\n\n— ${source}\n\n동양 사상가 NFC 키링`,
            url: window.location.href
        };
        
        // Web Share API 지원 확인
        if (navigator.share) {
            try {
                await navigator.share(shareData);
                this.showToast('공유되었습니다!', 'success');
                
                // Google Analytics 이벤트
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'share', {
                        'event_category': 'Engagement',
                        'event_label': character,
                        'method': 'Web Share API'
                    });
                }
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('공유 실패:', err);
                    this.fallbackShare(shareData);
                }
            }
        } else {
            this.fallbackShare(shareData);
        }
    }

    // 대체 공유 방법 (클립보드 복사)
    fallbackShare(shareData) {
        const textToCopy = `${shareData.text}\n${shareData.url}`;
        
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                this.showToast('클립보드에 복사되었습니다!', 'success');
            })
            .catch((err) => {
                console.error('복사 실패:', err);
                this.showToast('공유에 실패했습니다', 'error');
            });
    }

    showToast(message, type) {
        if (window.bookmarkManager) {
            window.bookmarkManager.showToast(message, type);
        }
    }
}

// 전역 인스턴스 생성
window.shareManager = new ShareManager();


// ===== 검색 기능 =====

class SearchManager {
    constructor() {
        this.searchIndex = [];
        this.init();
    }

    init() {
        // DOM이 이미 로드되었으면 바로 실행, 아니면 이벤트 리스너 등록
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.buildSearchIndex();
                this.renderSearchUI();
            });
        } else {
            // DOM이 이미 준비됨
            this.buildSearchIndex();
            this.renderSearchUI();
        }
    }

    // 검색 인덱스 생성
    buildSearchIndex() {
        const quoteCards = document.querySelectorAll('.quote-card, .quote-card-academic, .context-card, .anecdote-item, .philosophy-card');

        quoteCards.forEach((card, index) => {
            const character = card.closest('.character-content')?.id || 'unknown';

            // 모든 텍스트 수집 - 여러 p 태그, blockquote, span 등 모두 포함
            let allTexts = [];

            // 1. 제목 찾기 (h3, card-title)
            const titles = card.querySelectorAll('h3, .card-title-large, .anecdote-title');
            titles.forEach(title => {
                const text = title.textContent?.trim();
                if (text) allTexts.push(text);
            });

            // 2. 아이콘 텍스트 (仁, 道, 緣起 등)
            const icons = card.querySelectorAll('.card-icon-large');
            icons.forEach(icon => {
                const text = icon.textContent?.trim();
                if (text && !allTexts.includes(text)) allTexts.push(text);
            });

            // 3. 모든 p 태그 찾기
            const pTags = card.querySelectorAll('p');
            pTags.forEach(p => {
                const text = p.textContent?.trim();
                if (text) allTexts.push(text);
            });

            // 4. blockquote 안의 p 태그
            const blockquotePTags = card.querySelectorAll('blockquote p');
            blockquotePTags.forEach(p => {
                const text = p.textContent?.trim();
                if (text && !allTexts.includes(text)) allTexts.push(text);
            });

            // 5. data-ko 속성이 있는 모든 요소 (한국어)
            const koSpans = card.querySelectorAll('[data-ko]');
            koSpans.forEach(span => {
                const text = span.getAttribute('data-ko')?.trim();
                if (text && !allTexts.includes(text)) allTexts.push(text);
            });

            // 6. data-en 속성이 있는 모든 요소 (영어)
            const enSpans = card.querySelectorAll('[data-en]');
            enSpans.forEach(span => {
                const text = span.getAttribute('data-en')?.trim();
                if (text && !allTexts.includes(text)) allTexts.push(text);
            });

            // 모든 텍스트 합치기
            const combinedText = allTexts.join(' ');

            // 키워드 검색을 위해 단어들을 토큰화
            // 공백, 쉼표, 마침표 등으로 분리하여 개별 단어들을 추출
            const tokens = combinedText.toLowerCase()
                .split(/[\s,，.。!?？！、]+/)
                .filter(token => token.length > 0);

            // 소스 찾기 - cite 태그도 확인
            let sourceElement = card.querySelector('.quote-source, .context-source, .anecdote-source');
            if (!sourceElement) {
                sourceElement = card.querySelector('cite');
            }
            const source = sourceElement?.textContent || '';

            // 컨텐츠 타입 결정
            let contentType = '어록';
            let contentIcon = '📜';
            if (card.classList.contains('anecdote-item')) {
                contentType = '역사적 일화';
                contentIcon = '📖';
            } else if (card.classList.contains('philosophy-card')) {
                contentType = '핵심 사상';
                contentIcon = '💡';
            } else if (card.classList.contains('context-card')) {
                contentType = '배경';
                contentIcon = '📝';
            }

            this.searchIndex.push({
                id: `${character}-${index}`,
                character: character,
                text: combinedText.toLowerCase(),
                textOriginal: combinedText,
                tokens: tokens,  // 단어 토큰 배열 추가
                source: source,
                contentType: contentType,
                contentIcon: contentIcon,
                element: card
            });
        });

        console.log(`검색 인덱스 생성 완료: ${this.searchIndex.length}개 항목`);
        console.log('샘플 인덱스:', this.searchIndex.slice(0, 3));
    }

    // 검색 UI 렌더링
    renderSearchUI() {
        // 검색창이 이미 있으면 리턴
        if (document.getElementById('search-container')) return;

        const searchContainer = document.createElement('div');
        searchContainer.id = 'search-container';
        searchContainer.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 9997;
        `;

        searchContainer.innerHTML = `
            <style>
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .search-result-item {
                    animation: fadeIn 0.3s ease-out;
                }

                #search-results.show {
                    animation: fadeInDown 0.4s ease-out;
                }

                /* Mobile-optimized search with smooth animations */
                @media (max-width: 768px) {
                    #search-container {
                        top: 70px !important;
                        right: 10px !important;
                        left: auto !important;
                        width: auto !important;
                    }

                    #search-wrapper {
                        position: relative;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        transform-origin: right center;
                    }

                    #search-wrapper.collapsed {
                        width: 44px;
                        height: 44px;
                    }

                    #search-wrapper.collapsed #search-input {
                        width: 44px !important;
                        padding: 0 !important;
                        opacity: 0;
                        cursor: pointer;
                        border-color: transparent !important;
                        box-shadow: none !important;
                        pointer-events: all;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    #search-wrapper.collapsed .search-icon {
                        cursor: pointer;
                        background: rgba(255, 255, 255, 0.98);
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
                        border: 2px solid #e0e0e0;
                        transition: all 0.3s ease;
                        pointer-events: none;
                    }

                    #search-wrapper.collapsed .search-icon:active {
                        transform: scale(0.95);
                    }

                    #search-wrapper.expanded {
                        animation: searchExpand 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    }

                    @keyframes searchExpand {
                        0% {
                            width: 44px;
                        }
                        100% {
                            width: calc(100vw - 40px);
                            max-width: 400px;
                        }
                    }

                    #search-wrapper.expanded #search-input {
                        width: 100% !important;
                        padding: 0.75rem 2.5rem 0.75rem 1rem !important;
                        opacity: 1;
                        transition: opacity 0.3s ease 0.2s, padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    #search-wrapper.expanded .search-icon {
                        opacity: 1;
                        transition: all 0.3s ease;
                    }

                    #search-results {
                        max-width: calc(100vw - 40px) !important;
                        max-height: 60vh !important;
                        transition: all 0.3s ease;
                    }

                    #search-results.show {
                        animation: fadeInDown 0.3s ease-out;
                    }
                }
                /* Desktop search animation */
                @media (min-width: 769px) {
                    @keyframes searchExpandDesktop {
                        0% {
                            width: 200px;
                        }
                        100% {
                            width: 400px;
                        }
                    }

                    @keyframes searchCollapseDesktop {
                        0% {
                            width: 400px;
                        }
                        100% {
                            width: 200px;
                        }
                    }

                    #search-wrapper {
                        position: relative;
                        transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    #search-wrapper.collapsed {
                        width: 200px;
                        animation: searchCollapseDesktop 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    }

                    #search-wrapper.collapsed #search-input {
                        width: 200px !important;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        border-color: #e0e0e0;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    }

                    #search-wrapper.expanded {
                        width: 400px;
                        animation: searchExpandDesktop 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    }

                    #search-wrapper.expanded #search-input {
                        width: 400px !important;
                        border-color: #8B2635;
                        box-shadow: 0 4px 16px rgba(139, 38, 53, 0.2);
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    #search-input:focus {
                        width: 400px !important;
                        border-color: #8B2635;
                        box-shadow: 0 4px 16px rgba(139, 38, 53, 0.2);
                    }

                    /* Smooth icon transition */
                    .search-icon {
                        transition: all 0.3s ease;
                    }

                    #search-wrapper.expanded .search-icon {
                        opacity: 0.7;
                    }
                }
            </style>
            <div id="search-wrapper" class="collapsed" style="position: relative;">
                <input type="text" id="search-input" placeholder="명언 검색..."
                       style="width: 200px; padding: 0.75rem 2.5rem 0.75rem 1rem; border: 2px solid #e0e0e0;
                              border-radius: 50px; font-size: 1rem; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                <span class="search-icon" style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%);
                            font-size: 1.25rem; color: #6a6a6a; pointer-events: none;">
                    🔍
                </span>
            </div>
            <div id="search-results" style="display: none; margin-top: 1rem; background: white;
                                           border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                                           max-height: 400px; overflow-y: auto; padding: 1rem;"></div>
        `;
        
        document.body.appendChild(searchContainer);

        // 검색 이벤트
        const searchInput = document.getElementById('search-input');
        const searchWrapper = document.getElementById('search-wrapper');
        const searchResults = document.getElementById('search-results');
        let searchTimeout;

        // Mobile: Toggle search on click
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        if (isMobile) {
            searchInput.addEventListener('click', () => {
                if (searchWrapper.classList.contains('collapsed')) {
                    searchWrapper.classList.remove('collapsed');
                    searchWrapper.classList.add('expanded');
                    searchInput.focus();
                }
            });

            // Close search when clicking outside
            document.addEventListener('click', (e) => {
                if (!searchContainer.contains(e.target) && searchWrapper.classList.contains('expanded')) {
                    if (!searchInput.value) {
                        searchWrapper.classList.remove('expanded');
                        searchWrapper.classList.add('collapsed');
                        searchResults.style.display = 'none';
                    }
                }
            });
        } else {
            // Desktop: Expand on focus/click
            searchInput.addEventListener('focus', () => {
                searchWrapper.classList.remove('collapsed');
                searchWrapper.classList.add('expanded');
            });

            searchInput.addEventListener('click', () => {
                searchWrapper.classList.remove('collapsed');
                searchWrapper.classList.add('expanded');
            });

            // Collapse when clicking outside and input is empty
            document.addEventListener('click', (e) => {
                if (!searchContainer.contains(e.target) && searchWrapper.classList.contains('expanded')) {
                    if (!searchInput.value) {
                        searchWrapper.classList.remove('expanded');
                        searchWrapper.classList.add('collapsed');
                        searchResults.style.display = 'none';
                    }
                }
            });
        }

        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value);
            }, 300);
        });
    }

    // 검색 실행
    performSearch(query) {
        const resultsContainer = document.getElementById('search-results');

        if (!query || query.length < 1) {
            resultsContainer.classList.remove('show');
            resultsContainer.style.display = 'none';
            return;
        }

        const searchTerms = query.toLowerCase().split(' ').filter(t => t.length > 0);

        // 키워드/단어 단위 검색 로직
        const results = this.searchIndex.filter(item => {
            return searchTerms.every(term => {
                // 1. 전체 텍스트에서 부분 문자열 매칭 (기존 기능 유지)
                if (item.text.includes(term)) {
                    return true;
                }

                // 2. 개별 단어(토큰)에서 매칭 - 단어가 검색어로 시작하거나 포함하는 경우
                const foundInTokens = item.tokens.some(token => {
                    return token.includes(term);
                });

                if (foundInTokens) {
                    return true;
                }

                // 3. 출처(source)에서 매칭
                if (item.source.toLowerCase().includes(term)) {
                    return true;
                }

                return false;
            });
        });

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="search-result-item" style="text-align: center; padding: 2rem; color: #6a6a6a;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
                    <p>검색 결과가 없습니다</p>
                </div>
            `;
            resultsContainer.style.display = 'block';
            resultsContainer.classList.add('show');
            return;
        }

        // 컨텐츠 타입별로 그룹화
        const groupedResults = {
            '어록': results.filter(r => r.contentType === '어록'),
            '역사적 일화': results.filter(r => r.contentType === '역사적 일화'),
            '핵심 사상': results.filter(r => r.contentType === '핵심 사상'),
            '배경': results.filter(r => r.contentType === '배경')
        };

        let animationIndex = 0;
        let htmlContent = `
            <div class="search-result-item" style="margin-bottom: 1rem; font-weight: 600; color: #8B2635;">
                ${results.length}개의 결과
            </div>
        `;

        // 우선순위대로 렌더링: 어록 → 일화 → 핵심사상 → 배경
        ['어록', '역사적 일화', '핵심 사상', '배경'].forEach(type => {
            const groupResults = groupedResults[type];
            if (groupResults.length > 0) {
                // 그룹 헤더
                htmlContent += `
                    <div class="search-result-item" style="margin: 1.5rem 0 0.75rem 0; padding: 0.5rem 0;
                                border-bottom: 2px solid #8B2635; font-weight: 600; color: #8B2635;">
                        ${groupResults[0].contentIcon} ${type} (${groupResults.length})
                    </div>
                `;

                // 그룹 내 결과
                groupResults.forEach(result => {
                    htmlContent += `
                        <div class="search-result-item" onclick="window.searchManager.scrollToResult('${result.id}')"
                             style="padding: 1rem; border-bottom: 1px solid #e0e0e0; cursor: pointer;
                                    transition: background 0.2s ease; animation-delay: ${animationIndex * 0.05}s;">
                            <div style="color: #8B2635; font-size: 0.85rem; font-weight: 600;
                                        margin-bottom: 0.5rem; text-transform: uppercase;">
                                ${this.getCharacterName(result.character)}
                            </div>
                            <p style="margin: 0.5rem 0; line-height: 1.5;">
                                ${this.highlightText(result.textOriginal, searchTerms)}
                            </p>
                            <div style="font-size: 0.8rem; color: #6a6a6a;">
                                ${result.source}
                            </div>
                        </div>
                    `;
                    animationIndex++;
                });
            }
        });

        resultsContainer.innerHTML = htmlContent;
        resultsContainer.style.display = 'block';
        resultsContainer.classList.add('show');

        // 호버 효과
        resultsContainer.querySelectorAll('div[onclick]').forEach(div => {
            div.addEventListener('mouseenter', () => {
                div.style.background = '#f5f5f5';
            });
            div.addEventListener('mouseleave', () => {
                div.style.background = 'transparent';
            });
        });
        
        // Google Analytics 이벤트
        if (typeof gtag !== 'undefined') {
            gtag('event', 'search', {
                'event_category': 'Engagement',
                'search_term': query,
                'results_count': results.length
            });
        }
    }

    // 검색 결과로 스크롤
    scrollToResult(itemId) {
        const item = this.searchIndex.find(i => i.id === itemId);
        if (item && item.element) {
            // 해당 사상가 탭으로 전환
            const characterTab = document.querySelector(`[data-character="${item.character}"]`);
            if (characterTab) {
                characterTab.click();
            }
            
            // 스크롤
            setTimeout(() => {
                item.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // 하이라이트 효과
                item.element.style.transition = 'all 0.3s ease';
                item.element.style.boxShadow = '0 0 0 3px #8B2635';
                item.element.style.transform = 'scale(1.02)';
                
                setTimeout(() => {
                    item.element.style.boxShadow = '';
                    item.element.style.transform = '';
                }, 1500);
            }, 300);
            
            // 검색 결과 닫기
            document.getElementById('search-results').style.display = 'none';
        }
    }

    // 텍스트 하이라이트
    highlightText(text, searchTerms) {
        let highlightedText = text;
        searchTerms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark style="background: #FFD54F; padding: 0 2px;">$1</mark>');
        });
        return highlightedText;
    }

    getCharacterName(id) {
        const names = {
            'confucius': '공자 (孔子)',
            'laozi': '노자 (老子)',
            'buddha': '석가모니 (釋迦牟尼)'
        };
        return names[id] || id;
    }
}

// 전역 인스턴스 생성
window.searchManager = new SearchManager();

console.log('✅ Features.js 로드 완료: 북마크, 공유, 검색 기능 활성화');


