// ===== Wisdom Library 미니 게임 =====

// ===== 게임 데이터 =====

// 공자 명언 데이터
const confuciusQuotes = [
    { hanja: '學而時習之，不亦說乎？', meaning: '배우고 때때로 익히면 또한 기쁘지 아니한가.', origin: '논어 학이편' },
    { hanja: '溫故而知新，可以為師矣。', meaning: '옛것을 익혀 새것을 알면 스승이 될 수 있다.', origin: '논어 위정편' },
    { hanja: '己所不欲，勿施於人。', meaning: '자기가 원하지 않는 것을 남에게 베풀지 말라.', origin: '논어 안연편' },
    { hanja: '三人行，必有我師焉。', meaning: '세 사람이 가면 반드시 나의 스승이 있다.', origin: '논어 술이편' },
    { hanja: '知之為知之，不知為不知，是知也。', meaning: '아는 것을 안다 하고 모르는 것을 모른다 하는 것이 참으로 아는 것이다.', origin: '논어 위정편' },
    { hanja: '君子坦蕩蕩，小人長戚戚。', meaning: '군자는 마음이 평탄하고 넓으나, 소인은 항상 근심한다.', origin: '논어 술이편' },
    { hanja: '歲寒，然後知松柏之後凋也。', meaning: '추운 겨울이 된 후에야 소나무와 잣나무가 늦게 시드는 것을 안다.', origin: '논어 자한편' },
    { hanja: '仁者不憂，知者不惑，勇者不懼。', meaning: '어진 사람은 근심하지 않고, 지혜로운 사람은 미혹되지 않으며, 용감한 사람은 두려워하지 않는다.', origin: '논어 자한편' }
];

// 노자 명언 데이터
const laoziQuotes = [
    { hanja: '道可道，非常道。', meaning: '도를 도라고 말할 수 있으면 영원한 도가 아니다.', origin: '도덕경 제1장' },
    { hanja: '上善若水。', meaning: '최상의 선은 물과 같다.', origin: '도덕경 제8장' },
    { hanja: '知人者智，自知者明。', meaning: '남을 아는 사람은 지혜롭고, 자기를 아는 사람은 명철하다.', origin: '도덕경 제33장' },
    { hanja: '千里之行，始於足下。', meaning: '천 리 길도 한 걸음부터 시작한다.', origin: '도덕경 제64장' },
    { hanja: '知足不辱，知止不殆。', meaning: '만족함을 알면 욕되지 않고, 그칠 줄 알면 위태롭지 않다.', origin: '도덕경 제44장' },
    { hanja: '大道廢，有仁義。', meaning: '큰 도가 폐하니 인의가 생겨난다.', origin: '도덕경 제18장' },
    { hanja: '天下皆知美之為美，斯惡已。', meaning: '천하가 다 아름다움을 아름답다 하면 이는 추함이 생긴 것이다.', origin: '도덕경 제2장' },
    { hanja: '禍兮福之所倚，福兮禍之所伏。', meaning: '화는 복이 기대는 바요, 복은 화가 숨어 있는 곳이다.', origin: '도덕경 제58장' }
];

// 석가모니 명언 데이터
const buddhaQuotes = [
    { hanja: '諸法意先導。', meaning: '모든 것은 마음이 앞서고 마음이 으뜸이다.', origin: '법구경 심품' },
    { hanja: '諸惡莫作，眾善奉行。', meaning: '모든 악을 짓지 말고 모든 선을 받들어 행하라.', origin: '법구경 법구품' },
    { hanja: '自己是自己的依怙。', meaning: '자기 자신이 자기의 의지처이다.', origin: '법구경 자품' },
    { hanja: '不放逸是不死道。', meaning: '방일하지 않음이 불사의 길이다.', origin: '법구경 불방일품' },
    { hanja: '勝自己者，最上戰士。', meaning: '자기 자신을 이기는 자가 최고의 전사다.', origin: '법구경 천품' },
    { hanja: '恨不止恨，以無恨止。', meaning: '원한은 원한으로 그치지 않고, 원한 없음으로 그친다.', origin: '법구경 쌍품' },
    { hanja: '一切皆苦。', meaning: '모든 것은 괴로움이다.', origin: '법구경 고품' },
    { hanja: '萬法因緣生。', meaning: '만법은 인연으로 생겨난다.', origin: '법구경 연품' }
];

// 사자성어 데이터
const idioms = [
    { id: 1, word: '溫故知新', meaning: '옛것을 익혀 새것을 앎' },
    { id: 2, word: '大器晩成', meaning: '큰 그릇은 늦게 이루어짐' },
    { id: 3, word: '苦盡甘來', meaning: '고생 끝에 낙이 옴' },
    { id: 4, word: '一石二鳥', meaning: '돌 하나로 새 두 마리를 잡음' },
    { id: 5, word: '臥薪嘗膽', meaning: '장작 위에 누워 쓸개를 맛봄' },
    { id: 6, word: '刻舟求劍', meaning: '배에 새겨 칼을 구함' },
    { id: 7, word: '指鹿為馬', meaning: '사슴을 가리켜 말이라 함' },
    { id: 8, word: '井中之蛙', meaning: '우물 안 개구리' }
];

// ===== 오늘의 지혜 게임 =====

function openDailyWisdomGame(philosopher) {
    const colors = {
        confucius: '#8b0000',
        laozi: '#2563eb',
        buddha: '#d97706'
    };

    const names = {
        confucius: '공자',
        laozi: '노자',
        buddha: '석가모니'
    };

    const quotes = {
        confucius: confuciusQuotes,
        laozi: laoziQuotes,
        buddha: buddhaQuotes
    };

    const color = colors[philosopher];
    const name = names[philosopher];
    const quoteData = quotes[philosopher];

    const modal = createGameModal(
        `${name}의 지혜`,
        `Wisdom of ${name}`,
        color
    );

    const content = document.createElement('div');
    content.style.cssText = 'text-align: center; padding: 2rem 0;';

    // 닫힌 책 이미지 (클릭 전)
    const bookContainer = document.createElement('div');
    bookContainer.id = 'wisdom-book';
    bookContainer.style.cssText = `
        width: 200px;
        height: 250px;
        margin: 0 auto 2rem auto;
        background: linear-gradient(135deg, ${color}20 0%, ${color}40 100%);
        border: 3px solid ${color};
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px ${color}30;
    `;

    const bookIcon = document.createElement('div');
    bookIcon.style.cssText = 'font-size: 4rem; margin-bottom: 1rem;';
    bookIcon.textContent = '📜';

    const bookText = document.createElement('div');
    bookText.style.cssText = `color: ${color}; font-weight: 600; font-size: 1.1rem;`;
    bookText.textContent = '클릭하여 지혜를 얻으세요';

    bookContainer.appendChild(bookIcon);
    bookContainer.appendChild(bookText);

    // 명언 표시 영역 (처음엔 숨김)
    const quoteDisplay = document.createElement('div');
    quoteDisplay.id = 'quote-display';
    quoteDisplay.style.cssText = 'opacity: 0; transition: opacity 0.5s ease; margin-top: 2rem;';

    const quoteHanja = document.createElement('div');
    quoteHanja.style.cssText = `
        font-size: 1.5rem;
        font-weight: 600;
        color: ${color};
        margin-bottom: 1.5rem;
        line-height: 1.8;
        font-family: 'Noto Serif KR', serif;
    `;

    const quoteMeaning = document.createElement('div');
    quoteMeaning.style.cssText = `
        font-size: 1.1rem;
        color: #333;
        margin-bottom: 1rem;
        line-height: 1.6;
    `;

    const quoteOrigin = document.createElement('div');
    quoteOrigin.style.cssText = `
        font-size: 0.9rem;
        color: #666;
        font-style: italic;
    `;

    quoteDisplay.appendChild(quoteHanja);
    quoteDisplay.appendChild(quoteMeaning);
    quoteDisplay.appendChild(quoteOrigin);

    // 다시 뽑기 버튼
    const rerollBtn = document.createElement('button');
    rerollBtn.textContent = '다시 뽑기';
    rerollBtn.style.cssText = `
        margin-top: 2rem;
        padding: 0.75rem 2rem;
        background: ${color};
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
    `;
    rerollBtn.addEventListener('mouseenter', () => {
        rerollBtn.style.transform = 'translateY(-2px)';
        rerollBtn.style.boxShadow = `0 4px 12px ${color}50`;
    });
    rerollBtn.addEventListener('mouseleave', () => {
        rerollBtn.style.transform = 'translateY(0)';
        rerollBtn.style.boxShadow = 'none';
    });

    // 명언 뽑기 함수
    function drawQuote() {
        const randomQuote = quoteData[Math.floor(Math.random() * quoteData.length)];

        // 책 애니메이션
        bookContainer.style.transform = 'rotateY(90deg)';

        setTimeout(() => {
            bookContainer.style.display = 'none';
            quoteHanja.textContent = randomQuote.hanja;
            quoteMeaning.textContent = randomQuote.meaning;
            quoteOrigin.textContent = `- ${randomQuote.origin}`;

            quoteDisplay.style.opacity = '1';
            rerollBtn.style.opacity = '1';
        }, 300);
    }

    // 다시 뽑기 함수
    function redraw() {
        quoteDisplay.style.opacity = '0';
        rerollBtn.style.opacity = '0';

        setTimeout(() => {
            bookContainer.style.display = 'flex';
            bookContainer.style.transform = 'rotateY(0deg)';
        }, 300);
    }

    bookContainer.addEventListener('click', drawQuote);
    rerollBtn.addEventListener('click', redraw);

    bookContainer.addEventListener('mouseenter', () => {
        bookContainer.style.transform = 'scale(1.05)';
        bookContainer.style.boxShadow = `0 8px 20px ${color}40`;
    });
    bookContainer.addEventListener('mouseleave', () => {
        if (bookContainer.style.display !== 'none') {
            bookContainer.style.transform = 'scale(1)';
            bookContainer.style.boxShadow = `0 4px 12px ${color}30`;
        }
    });

    content.appendChild(bookContainer);
    content.appendChild(quoteDisplay);
    content.appendChild(rerollBtn);

    modal.querySelector('.game-modal-body').appendChild(content);
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

// ===== 사자성어 짝 맞추기 게임 =====

function openIdiomMatchingGame() {
    const color = '#8b0000';

    const modal = createGameModal(
        '사자성어 짝 맞추기',
        'Idiom Memory Matching',
        color
    );

    const content = document.createElement('div');
    content.style.cssText = 'padding: 1rem 0;';

    // 게임 상태
    let flippedCards = [];
    let matchedPairs = 0;
    let canFlip = true;

    // 카드 데이터 생성 (8쌍 = 16장)
    const gameIdioms = idioms.slice(0, 8);
    const cards = [];

    gameIdioms.forEach(idiom => {
        cards.push({ id: idiom.id, type: 'word', content: idiom.word, pairId: idiom.id });
        cards.push({ id: idiom.id, type: 'meaning', content: idiom.meaning, pairId: idiom.id });
    });

    // 카드 섞기
    cards.sort(() => Math.random() - 0.5);

    // 점수 표시
    const scoreBoard = document.createElement('div');
    scoreBoard.style.cssText = 'text-align: center; margin-bottom: 1.5rem; font-size: 1.1rem; color: #666;';
    scoreBoard.textContent = `맞춘 개수: ${matchedPairs} / 8`;
    content.appendChild(scoreBoard);

    // 카드 그리드
    const cardGrid = document.createElement('div');
    cardGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.75rem;
        max-width: 600px;
        margin: 0 auto;
    `;

    // 카드 생성
    cards.forEach((cardData, index) => {
        const card = document.createElement('div');
        card.className = 'idiom-card';
        card.dataset.index = index;
        card.dataset.pairId = cardData.pairId;
        card.dataset.type = cardData.type;
        card.style.cssText = `
            aspect-ratio: 1;
            background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
            border: 2px solid ${color};
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            transform-style: preserve-3d;
            font-size: 0.85rem;
            font-weight: 600;
            padding: 0.5rem;
            text-align: center;
            line-height: 1.4;
        `;

        // 뒷면
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, ${color}20 0%, ${color}40 100%);
            border-radius: 6px;
            font-size: 1.5rem;
        `;
        cardBack.textContent = '📜';

        // 앞면
        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        cardFront.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            transform: rotateY(180deg);
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 6px;
            color: ${cardData.type === 'word' ? color : '#333'};
            padding: 0.5rem;
        `;
        cardFront.textContent = cardData.content;

        card.appendChild(cardBack);
        card.appendChild(cardFront);

        // 카드 클릭 이벤트
        card.addEventListener('click', () => {
            if (!canFlip || card.classList.contains('flipped') || card.classList.contains('matched')) {
                return;
            }

            // 카드 뒤집기
            card.style.transform = 'rotateY(180deg)';
            card.classList.add('flipped');
            flippedCards.push({ element: card, data: cardData });

            if (flippedCards.length === 2) {
                canFlip = false;

                setTimeout(() => {
                    checkMatch();
                }, 800);
            }
        });

        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('matched')) {
                card.style.transform = card.classList.contains('flipped') ? 'rotateY(180deg) scale(1.05)' : 'scale(1.05)';
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('matched')) {
                card.style.transform = card.classList.contains('flipped') ? 'rotateY(180deg)' : '';
            }
        });

        cardGrid.appendChild(card);
    });

    // 매칭 확인 함수
    function checkMatch() {
        const [card1, card2] = flippedCards;

        if (card1.data.pairId === card2.data.pairId) {
            // 매칭 성공
            card1.element.classList.add('matched');
            card2.element.classList.add('matched');
            card1.element.style.background = `linear-gradient(135deg, ${color}10 0%, ${color}20 100%)`;
            card2.element.style.background = `linear-gradient(135deg, ${color}10 0%, ${color}20 100%)`;
            card1.element.style.cursor = 'default';
            card2.element.style.cursor = 'default';

            matchedPairs++;
            scoreBoard.textContent = `맞춘 개수: ${matchedPairs} / 8`;

            if (matchedPairs === 8) {
                setTimeout(() => {
                    showGameComplete();
                }, 500);
            }
        } else {
            // 매칭 실패
            setTimeout(() => {
                card1.element.style.transform = '';
                card2.element.style.transform = '';
                card1.element.classList.remove('flipped');
                card2.element.classList.remove('flipped');
            }, 500);
        }

        flippedCards = [];
        canFlip = true;
    }

    // 게임 완료 메시지
    function showGameComplete() {
        const completeMsg = document.createElement('div');
        completeMsg.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 2rem;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
            text-align: center;
            z-index: 10;
        `;
        completeMsg.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
            <div style="font-size: 1.5rem; font-weight: 600; color: ${color}; margin-bottom: 0.5rem;">
                축하합니다!
            </div>
            <div style="font-size: 1rem; color: #666;">
                당신의 지혜가 한 층 깊어졌습니다
            </div>
        `;
        content.style.position = 'relative';
        content.appendChild(completeMsg);
    }

    content.appendChild(cardGrid);

    modal.querySelector('.game-modal-body').appendChild(content);
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

// ===== 모달 생성 함수 =====

function createGameModal(title, titleEn, color) {
    const modal = document.createElement('div');
    modal.className = 'game-modal';
    modal.innerHTML = `
        <div class="game-modal-overlay" onclick="this.parentElement.remove()"></div>
        <div class="game-modal-content">
            <button class="game-modal-close" onclick="this.closest('.game-modal').remove()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div class="game-modal-header" style="border-bottom: 3px solid ${color};">
                <h2 style="color: ${color};">${title}</h2>
                <p style="color: #666; font-size: 0.9rem; margin-top: 0.5rem;">${titleEn}</p>
            </div>
            <div class="game-modal-body"></div>
        </div>
    `;
    return modal;
}

// ===== CSS 스타일 추가 =====

const gameModalStyles = document.createElement('style');
gameModalStyles.textContent = `
    .game-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .game-modal.show {
        opacity: 1;
    }

    .game-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
    }

    .game-modal-content {
        position: relative;
        background: #faf8f3;
        border-radius: 20px;
        max-width: 700px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }

    .game-modal.show .game-modal-content {
        transform: scale(1);
    }

    .game-modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0, 0, 0, 0.05);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        z-index: 10;
    }

    .game-modal-close:hover {
        background: rgba(0, 0, 0, 0.1);
        transform: rotate(90deg);
    }

    .game-modal-header {
        padding: 2rem;
        text-align: center;
    }

    .game-modal-header h2 {
        margin: 0;
        font-size: 1.8rem;
    }

    .game-modal-body {
        padding: 0 2rem 2rem 2rem;
    }

    @media (max-width: 640px) {
        .game-modal-content {
            max-width: 95%;
            max-height: 95vh;
        }

        .game-modal-header {
            padding: 1.5rem 1rem;
        }

        .game-modal-header h2 {
            font-size: 1.4rem;
        }

        .game-modal-body {
            padding: 0 1rem 1.5rem 1rem;
        }

        .idiom-card {
            font-size: 0.75rem !important;
        }
    }
`;
document.head.appendChild(gameModalStyles);

console.log('✅ Wisdom Library 미니 게임 로드 완료');
