// ===== 동양 철학 상징물 모달 =====

// 육예 (Six Arts) 모달
function openSixArtsModal() {
    const modal = createSymbolModal(
        '六藝 (육예) - 군자의 여섯 가지 기예',
        'Six Arts - Six Skills of a Gentleman',
        '#8b0000'
    );

    const content = document.createElement('div');
    content.style.cssText = 'text-align: center; padding: 2rem 0;';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '400');
    svg.setAttribute('height', '400');
    svg.setAttribute('viewBox', '0 0 400 400');
    svg.style.cssText = 'width: 100%; height: auto; max-width: 400px; margin: 0 auto;';

    const arts = [
        { name: '禮', nameKo: '예', desc: '예절', color: '#8b0000', icon: '🙏' },
        { name: '樂', nameKo: '악', desc: '음악', color: '#a52a2a', icon: '🎵' },
        { name: '射', nameKo: '사', desc: '활쏘기', color: '#b22222', icon: '🏹' },
        { name: '御', nameKo: '어', desc: '말타기', color: '#c41e3a', icon: '🐎' },
        { name: '書', nameKo: '서', desc: '글쓰기', color: '#d2042d', icon: '✍️' },
        { name: '數', nameKo: '수', desc: '산수', color: '#dc143c', icon: '🔢' }
    ];

    // 중심 원
    const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    centerCircle.setAttribute('cx', '200');
    centerCircle.setAttribute('cy', '200');
    centerCircle.setAttribute('r', '50');
    centerCircle.setAttribute('fill', '#8b0000');
    centerCircle.setAttribute('opacity', '0.2');
    svg.appendChild(centerCircle);

    // 중심 텍스트
    const centerText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    centerText.setAttribute('x', '200');
    centerText.setAttribute('y', '210');
    centerText.setAttribute('text-anchor', 'middle');
    centerText.setAttribute('fill', '#8b0000');
    centerText.setAttribute('font-size', '32');
    centerText.setAttribute('font-weight', 'bold');
    centerText.textContent = '六藝';
    svg.appendChild(centerText);

    // 6개의 육예 요소
    arts.forEach((art, index) => {
        const angle = (index * 60 - 90) * Math.PI / 180;
        const radius = 120;
        const x = 200 + radius * Math.cos(angle);
        const y = 200 + radius * Math.sin(angle);

        // 연결선
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', '200');
        line.setAttribute('y1', '200');
        line.setAttribute('x2', x);
        line.setAttribute('y2', y);
        line.setAttribute('stroke', art.color);
        line.setAttribute('stroke-width', '2');
        line.setAttribute('opacity', '0.3');
        svg.appendChild(line);

        // 원
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', '40');
        circle.setAttribute('fill', 'white');
        circle.setAttribute('stroke', art.color);
        circle.setAttribute('stroke-width', '3');
        circle.style.cursor = 'pointer';
        circle.style.transition = 'all 0.3s ease';

        // 호버 효과
        circle.addEventListener('mouseenter', () => {
            circle.setAttribute('r', '45');
            circle.setAttribute('fill', art.color);
            circle.setAttribute('fill-opacity', '0.1');
            line.setAttribute('stroke-width', '4');
            line.setAttribute('opacity', '0.8');
        });

        circle.addEventListener('mouseleave', () => {
            circle.setAttribute('r', '40');
            circle.setAttribute('fill', 'white');
            line.setAttribute('stroke-width', '2');
            line.setAttribute('opacity', '0.3');
        });

        svg.appendChild(circle);

        // 한자 텍스트
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', y + 8);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', art.color);
        text.setAttribute('font-size', '28');
        text.setAttribute('font-weight', 'bold');
        text.textContent = art.name;
        text.style.pointerEvents = 'none';
        svg.appendChild(text);
    });

    content.appendChild(svg);

    // 설명 추가
    const description = document.createElement('div');
    description.style.cssText = 'margin-top: 2rem; padding: 0 1rem;';
    const descGrid = document.createElement('div');
    descGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;';

    arts.forEach(art => {
        const card = document.createElement('div');
        card.style.cssText = `padding: 1rem; background: ${art.color}10; border-left: 3px solid ${art.color}; border-radius: 8px;`;
        card.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">${art.icon}</div>
            <div style="font-size: 1.2rem; font-weight: 600; color: ${art.color};">${art.name} (${art.nameKo})</div>
            <div style="font-size: 0.9rem; color: #666; margin-top: 0.25rem;">${art.desc}</div>
        `;
        descGrid.appendChild(card);
    });

    description.appendChild(descGrid);
    content.appendChild(description);

    modal.querySelector('.symbol-modal-body').appendChild(content);
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

// 도의 상징 모달
function openTaoSymbolsModal() {
    const modal = createSymbolModal(
        '道의 상징 - 태극과 물의 흐름',
        'Symbols of Tao - Yin Yang and Flowing Water',
        '#2563eb'
    );

    const content = document.createElement('div');
    content.style.cssText = 'padding: 2rem 0;';

    // 태극 섹션
    const taichiSection = document.createElement('div');
    taichiSection.style.cssText = 'text-align: center; margin-bottom: 3rem;';

    const taichiTitle = document.createElement('h3');
    taichiTitle.textContent = '☯️ 태극 (太極)';
    taichiTitle.style.cssText = 'color: #2563eb; margin-bottom: 1rem;';
    taichiSection.appendChild(taichiTitle);

    // 태극 SVG
    const taichiSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    taichiSvg.setAttribute('width', '200');
    taichiSvg.setAttribute('height', '200');
    taichiSvg.setAttribute('viewBox', '0 0 200 200');
    taichiSvg.style.cssText = 'width: 200px; height: 200px; margin: 0 auto; animation: rotate 20s linear infinite;';

    // 태극 패턴
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    clipPath.setAttribute('id', 'yin-yang-clip');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M100,10 A90,90 0 0,1 100,190 A45,45 0 0,1 100,100 A45,45 0 0,0 100,10');
    clipPath.appendChild(path);
    defs.appendChild(clipPath);
    taichiSvg.appendChild(defs);

    // 외곽 원
    const outerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    outerCircle.setAttribute('cx', '100');
    outerCircle.setAttribute('cy', '100');
    outerCircle.setAttribute('r', '90');
    outerCircle.setAttribute('fill', 'white');
    outerCircle.setAttribute('stroke', '#2563eb');
    outerCircle.setAttribute('stroke-width', '3');
    taichiSvg.appendChild(outerCircle);

    // 음 (검정)
    const yin = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    yin.setAttribute('d', 'M100,10 A90,90 0 0,1 100,190 A45,45 0 0,1 100,100 A45,45 0 0,0 100,10');
    yin.setAttribute('fill', '#1e40af');
    taichiSvg.appendChild(yin);

    // 양의 점
    const yangDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    yangDot.setAttribute('cx', '100');
    yangDot.setAttribute('cy', '55');
    yangDot.setAttribute('r', '12');
    yangDot.setAttribute('fill', '#1e40af');
    taichiSvg.appendChild(yangDot);

    // 음의 점
    const yinDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    yinDot.setAttribute('cx', '100');
    yinDot.setAttribute('cy', '145');
    yinDot.setAttribute('r', '12');
    yinDot.setAttribute('fill', 'white');
    taichiSvg.appendChild(yinDot);

    taichiSection.appendChild(taichiSvg);

    const taichiDesc = document.createElement('p');
    taichiDesc.textContent = '음과 양의 조화, 대립과 공존을 나타내는 도가 사상의 핵심 상징';
    taichiDesc.style.cssText = 'color: #666; margin-top: 1rem;';
    taichiSection.appendChild(taichiDesc);

    content.appendChild(taichiSection);

    // 물의 흐름 섹션
    const waterSection = document.createElement('div');
    waterSection.style.cssText = 'text-align: center;';

    const waterTitle = document.createElement('h3');
    waterTitle.textContent = '🌊 물의 흐름';
    waterTitle.style.cssText = 'color: #2563eb; margin-bottom: 1rem;';
    waterSection.appendChild(waterTitle);

    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 200;
    canvas.style.cssText = 'width: 100%; max-width: 400px; height: auto; border-radius: 12px; background: linear-gradient(to bottom, #e0f2fe, #bfdbfe);';
    waterSection.appendChild(canvas);

    const waterDesc = document.createElement('p');
    waterDesc.textContent = '上善若水 (상선약수) - 최고의 선은 물과 같다';
    waterDesc.style.cssText = 'color: #666; margin-top: 1rem;';
    waterSection.appendChild(waterDesc);

    content.appendChild(waterSection);

    // Canvas 물 애니메이션
    const ctx = canvas.getContext('2d');
    const particles = [];

    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: 0.5 + Math.random() * 1,
            radius: 2 + Math.random() * 3
        });
    }

    function animateWater() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.speed;
            p.y += Math.sin(p.x / 30) * 0.5;

            if (p.x > canvas.width) {
                p.x = 0;
                p.y = Math.random() * canvas.height;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(37, 99, 235, ${0.3 + Math.random() * 0.3})`;
            ctx.fill();
        });

        requestAnimationFrame(animateWater);
    }

    animateWater();

    modal.querySelector('.symbol-modal-body').appendChild(content);
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

// 불의 상징 모달
function openBuddhaSymbolsModal() {
    const modal = createSymbolModal(
        '佛의 상징 - 법륜과 연꽃',
        'Symbols of Buddha - Dharma Wheel and Lotus',
        '#d97706'
    );

    const content = document.createElement('div');
    content.style.cssText = 'padding: 2rem 0;';

    // 법륜 섹션
    const wheelSection = document.createElement('div');
    wheelSection.style.cssText = 'text-align: center; margin-bottom: 3rem;';

    const wheelTitle = document.createElement('h3');
    wheelTitle.textContent = '☸️ 법륜 (法輪)';
    wheelTitle.style.cssText = 'color: #d97706; margin-bottom: 1rem;';
    wheelSection.appendChild(wheelTitle);

    // 법륜 SVG
    const wheelSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    wheelSvg.setAttribute('width', '200');
    wheelSvg.setAttribute('height', '200');
    wheelSvg.setAttribute('viewBox', '0 0 200 200');
    wheelSvg.style.cssText = 'width: 200px; height: 200px; margin: 0 auto; animation: rotate 30s linear infinite;';

    // 외곽 원
    const outerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    outerCircle.setAttribute('cx', '100');
    outerCircle.setAttribute('cy', '100');
    outerCircle.setAttribute('r', '90');
    outerCircle.setAttribute('fill', 'none');
    outerCircle.setAttribute('stroke', '#d97706');
    outerCircle.setAttribute('stroke-width', '6');
    wheelSvg.appendChild(outerCircle);

    // 중심 원
    const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    centerCircle.setAttribute('cx', '100');
    centerCircle.setAttribute('cy', '100');
    centerCircle.setAttribute('r', '20');
    centerCircle.setAttribute('fill', '#d97706');
    wheelSvg.appendChild(centerCircle);

    // 8개의 살 (팔정도)
    const paths = ['正見', '正思', '正語', '正業', '正命', '正精進', '正念', '正定'];
    for (let i = 0; i < 8; i++) {
        const angle = (i * 45 - 90) * Math.PI / 180;
        const x1 = 100 + 20 * Math.cos(angle);
        const y1 = 100 + 20 * Math.sin(angle);
        const x2 = 100 + 90 * Math.cos(angle);
        const y2 = 100 + 90 * Math.sin(angle);

        const spoke = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        spoke.setAttribute('x1', x1);
        spoke.setAttribute('y1', y1);
        spoke.setAttribute('x2', x2);
        spoke.setAttribute('y2', y2);
        spoke.setAttribute('stroke', '#d97706');
        spoke.setAttribute('stroke-width', '3');
        wheelSvg.appendChild(spoke);
    }

    wheelSection.appendChild(wheelSvg);

    const wheelDesc = document.createElement('p');
    wheelDesc.textContent = '팔정도 (八正道) - 부처의 가르침을 전파하는 법의 수레바퀴';
    wheelDesc.style.cssText = 'color: #666; margin-top: 1rem;';
    wheelSection.appendChild(wheelDesc);

    content.appendChild(wheelSection);

    // 연꽃 섹션
    const lotusSection = document.createElement('div');
    lotusSection.style.cssText = 'text-align: center;';

    const lotusTitle = document.createElement('h3');
    lotusTitle.textContent = '🪷 연꽃 (蓮華)';
    lotusTitle.style.cssText = 'color: #d97706; margin-bottom: 1rem;';
    lotusSection.appendChild(lotusTitle);

    // 연꽃 SVG
    const lotusSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    lotusSvg.setAttribute('width', '200');
    lotusSvg.setAttribute('height', '200');
    lotusSvg.setAttribute('viewBox', '0 0 200 200');
    lotusSvg.style.cssText = 'width: 200px; height: 200px; margin: 0 auto;';

    // 8개의 꽃잎
    const petals = [
        { x: 100, y: 40, rotate: 0 },
        { x: 141, y: 59, rotate: 45 },
        { x: 160, y: 100, rotate: 90 },
        { x: 141, y: 141, rotate: 135 },
        { x: 100, y: 160, rotate: 180 },
        { x: 59, y: 141, rotate: 225 },
        { x: 40, y: 100, rotate: 270 },
        { x: 59, y: 59, rotate: 315 }
    ];

    petals.forEach((petal, index) => {
        const petalElem = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        petalElem.setAttribute('cx', petal.x);
        petalElem.setAttribute('cy', petal.y);
        petalElem.setAttribute('rx', '25');
        petalElem.setAttribute('ry', '50');
        petalElem.setAttribute('fill', '#fbbf24');
        petalElem.setAttribute('opacity', '0.8');
        petalElem.setAttribute('transform', `rotate(${petal.rotate}, ${petal.x}, ${petal.y})`);
        petalElem.style.animation = `bloomPetal 2s ease-out ${index * 0.1}s both`;
        lotusSvg.appendChild(petalElem);
    });

    // 중심
    const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    center.setAttribute('cx', '100');
    center.setAttribute('cy', '100');
    center.setAttribute('r', '15');
    center.setAttribute('fill', '#d97706');
    lotusSvg.appendChild(center);

    lotusSection.appendChild(lotusSvg);

    const lotusDesc = document.createElement('p');
    lotusDesc.textContent = '진흙 속에서 피어나 깨끗한 꽃, 번뇌 속에서 깨달음을 상징';
    lotusDesc.style.cssText = 'color: #666; margin-top: 1rem;';
    lotusSection.appendChild(lotusDesc);

    content.appendChild(lotusSection);

    modal.querySelector('.symbol-modal-body').appendChild(content);
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

// 모달 생성 함수
function createSymbolModal(title, titleEn, color) {
    const modal = document.createElement('div');
    modal.className = 'symbol-modal';
    modal.innerHTML = `
        <div class="symbol-modal-overlay" onclick="this.parentElement.remove()"></div>
        <div class="symbol-modal-content">
            <button class="symbol-modal-close" onclick="this.closest('.symbol-modal').remove()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div class="symbol-modal-header" style="border-bottom: 3px solid ${color};">
                <h2 style="color: ${color};">${title}</h2>
                <p style="color: #666; font-size: 0.9rem; margin-top: 0.5rem;">${titleEn}</p>
            </div>
            <div class="symbol-modal-body"></div>
        </div>
    `;
    return modal;
}

// CSS 스타일 추가
const symbolModalStyles = document.createElement('style');
symbolModalStyles.textContent = `
    .symbol-modal {
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

    .symbol-modal.show {
        opacity: 1;
    }

    .symbol-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
    }

    .symbol-modal-content {
        position: relative;
        background: white;
        border-radius: 20px;
        max-width: 800px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }

    .symbol-modal.show .symbol-modal-content {
        transform: scale(1);
    }

    .symbol-modal-close {
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

    .symbol-modal-close:hover {
        background: rgba(0, 0, 0, 0.1);
        transform: rotate(90deg);
    }

    .symbol-modal-header {
        padding: 2rem;
        text-align: center;
    }

    .symbol-modal-header h2 {
        margin: 0;
        font-size: 1.8rem;
    }

    .symbol-modal-body {
        padding: 0 2rem 2rem 2rem;
    }

    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    @keyframes bloomPetal {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 0.8;
        }
    }

    @media (max-width: 640px) {
        .symbol-modal-content {
            max-width: 95%;
            max-height: 95vh;
        }

        .symbol-modal-header {
            padding: 1.5rem 1rem;
        }

        .symbol-modal-header h2 {
            font-size: 1.4rem;
        }

        .symbol-modal-body {
            padding: 0 1rem 1.5rem 1rem;
        }
    }
`;
document.head.appendChild(symbolModalStyles);

console.log('✅ 동양 철학 상징물 모달 로드 완료');
