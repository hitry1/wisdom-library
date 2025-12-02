// ===== 동양 철학 상징물 시각화 =====

// 공자 - 육예(六藝) 원형 다이어그램
class SixArtsCircle {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.arts = [
            { name: '禮', nameKo: '예', desc: '예절', color: '#8b0000', icon: '🙏' },
            { name: '樂', nameKo: '악', desc: '음악', color: '#a52a2a', icon: '🎵' },
            { name: '射', nameKo: '사', desc: '활쏘기', color: '#b22222', icon: '🏹' },
            { name: '御', nameKo: '어', desc: '말타기', color: '#c41e3a', icon: '🐎' },
            { name: '書', nameKo: '서', desc: '글쓰기', color: '#d2042d', icon: '✍️' },
            { name: '數', nameKo: '수', desc: '산수', color: '#dc143c', icon: '🔢' }
        ];
        this.currentActive = -1;
        this.init();
    }

    init() {
        this.createCircle();
        this.startAnimation();
    }

    createCircle() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '400');
        svg.setAttribute('height', '400');
        svg.setAttribute('viewBox', '0 0 400 400');
        svg.style.cssText = 'width: 100%; height: auto; max-width: 400px;';

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
        this.arts.forEach((art, index) => {
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
            line.classList.add(`six-arts-line-${index}`);
            svg.appendChild(line);

            // 외부 원
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', '40');
            circle.setAttribute('fill', art.color);
            circle.setAttribute('opacity', '0.8');
            circle.classList.add(`six-arts-circle-${index}`);
            circle.style.cursor = 'pointer';
            circle.style.transition = 'all 0.3s ease';

            circle.addEventListener('mouseenter', () => this.activateArt(index));
            circle.addEventListener('mouseleave', () => this.deactivateArt(index));

            svg.appendChild(circle);

            // 한자 텍스트
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', x);
            text.setAttribute('y', y + 8);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', 'white');
            text.setAttribute('font-size', '28');
            text.setAttribute('font-weight', 'bold');
            text.textContent = art.name;
            text.style.pointerEvents = 'none';
            svg.appendChild(text);
        });

        this.container.appendChild(svg);

        // 설명 영역
        const descBox = document.createElement('div');
        descBox.id = 'six-arts-desc';
        descBox.style.cssText = `
            margin-top: 2rem;
            text-align: center;
            min-height: 80px;
            padding: 1rem;
            background: linear-gradient(135deg, rgba(139, 0, 0, 0.05) 0%, rgba(139, 0, 0, 0.1) 100%);
            border-radius: 10px;
            border: 2px solid rgba(139, 0, 0, 0.2);
        `;
        descBox.innerHTML = '<p style="color: #666;">육예(六藝) 위에 마우스를 올려보세요</p>';
        this.container.appendChild(descBox);
    }

    activateArt(index) {
        this.currentActive = index;
        const art = this.arts[index];

        // 원 확대
        const circle = this.container.querySelector(`.six-arts-circle-${index}`);
        circle.setAttribute('r', '50');
        circle.setAttribute('opacity', '1');

        // 선 강조
        const line = this.container.querySelector(`.six-arts-line-${index}`);
        line.setAttribute('stroke-width', '4');
        line.setAttribute('opacity', '0.8');

        // 설명 업데이트
        const descBox = document.getElementById('six-arts-desc');
        descBox.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">${art.icon}</div>
            <h3 style="color: ${art.color}; margin: 0.5rem 0; font-size: 1.5rem;">
                ${art.name} (${art.nameKo})
            </h3>
            <p style="color: #666; margin: 0;">${art.desc}</p>
        `;
    }

    deactivateArt(index) {
        this.currentActive = -1;

        const circle = this.container.querySelector(`.six-arts-circle-${index}`);
        circle.setAttribute('r', '40');
        circle.setAttribute('opacity', '0.8');

        const line = this.container.querySelector(`.six-arts-line-${index}`);
        line.setAttribute('stroke-width', '2');
        line.setAttribute('opacity', '0.3');

        const descBox = document.getElementById('six-arts-desc');
        descBox.innerHTML = '<p style="color: #666;">육예(六藝) 위에 마우스를 올려보세요</p>';
    }

    startAnimation() {
        // 회전 애니메이션
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rotateArts {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

// 노자 - 태극도 + 흐르는 물
class TaoSymbols {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.init();
    }

    init() {
        this.createTaiChi();
        this.createWaterFlow();
    }

    createTaiChi() {
        const taichiDiv = document.createElement('div');
        taichiDiv.style.cssText = `
            width: 300px;
            height: 300px;
            margin: 0 auto 2rem;
            position: relative;
            animation: rotateTaiChi 20s linear infinite;
        `;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '300');
        svg.setAttribute('height', '300');
        svg.setAttribute('viewBox', '0 0 300 300');

        // 외곽 원
        const outerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        outerCircle.setAttribute('cx', '150');
        outerCircle.setAttribute('cy', '150');
        outerCircle.setAttribute('r', '148');
        outerCircle.setAttribute('fill', 'none');
        outerCircle.setAttribute('stroke', '#2563eb');
        outerCircle.setAttribute('stroke-width', '4');
        svg.appendChild(outerCircle);

        // 태극 패턴
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

        // 그라디언트
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'taichiGradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#1e40af');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#60a5fa');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.appendChild(defs);

        // 음 (검은색 부분)
        const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path1.setAttribute('d', 'M150,150 L150,2 A148,148 0 0,1 150,298 A74,74 0 0,0 150,150 A74,74 0 0,1 150,150 z');
        path1.setAttribute('fill', '#1e3a8a');
        svg.appendChild(path1);

        // 양 (흰색 부분)
        const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path2.setAttribute('d', 'M150,150 L150,2 A148,148 0 0,0 150,298 A74,74 0 0,1 150,150 A74,74 0 0,0 150,150 z');
        path2.setAttribute('fill', 'url(#taichiGradient)');
        svg.appendChild(path2);

        // 작은 원들
        const smallCircle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        smallCircle1.setAttribute('cx', '150');
        smallCircle1.setAttribute('cy', '76');
        smallCircle1.setAttribute('r', '20');
        smallCircle1.setAttribute('fill', '#60a5fa');
        svg.appendChild(smallCircle1);

        const smallCircle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        smallCircle2.setAttribute('cx', '150');
        smallCircle2.setAttribute('cy', '224');
        smallCircle2.setAttribute('r', '20');
        smallCircle2.setAttribute('fill', '#1e3a8a');
        svg.appendChild(smallCircle2);

        taichiDiv.appendChild(svg);
        this.container.appendChild(taichiDiv);

        // 태극 설명
        const desc = document.createElement('div');
        desc.style.cssText = `
            text-align: center;
            margin-bottom: 2rem;
            padding: 1rem;
            background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(37, 99, 235, 0.1) 100%);
            border-radius: 10px;
        `;
        desc.innerHTML = `
            <h3 style="color: #2563eb; margin: 0.5rem 0;">太極圖 (태극도)</h3>
            <p style="color: #666; margin: 0;">음양의 조화와 도의 순환</p>
        `;
        this.container.appendChild(desc);

        // 회전 애니메이션
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rotateTaiChi {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    createWaterFlow() {
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 200;
        canvas.style.cssText = 'width: 100%; max-width: 400px; border-radius: 10px;';
        this.container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        const particles = [];
        const particleCount = 50;

        // 파티클 생성
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                speed: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.3
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 배경 그라디언트
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, 'rgba(37, 99, 235, 0.1)');
            gradient.addColorStop(1, 'rgba(96, 165, 250, 0.2)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 파티클 그리기 및 이동
            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(37, 99, 235, ${particle.opacity})`;
                ctx.fill();

                // 물결 효과
                particle.x += particle.speed;
                particle.y += Math.sin(particle.x / 30) * 0.5;

                // 화면 밖으로 나가면 리셋
                if (particle.x > canvas.width) {
                    particle.x = -10;
                    particle.y = Math.random() * canvas.height;
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        // 물 설명
        const waterDesc = document.createElement('div');
        waterDesc.style.cssText = `
            text-align: center;
            margin-top: 1rem;
            padding: 1rem;
            background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(37, 99, 235, 0.1) 100%);
            border-radius: 10px;
        `;
        waterDesc.innerHTML = `
            <h3 style="color: #2563eb; margin: 0.5rem 0;">上善若水 (상선약수)</h3>
            <p style="color: #666; margin: 0;">최상의 선은 물과 같다</p>
        `;
        this.container.appendChild(waterDesc);
    }
}

// 석가모니 - 법륜(팔정도) + 연꽃
class BuddhistSymbols {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.init();
    }

    init() {
        this.createDharmaWheel();
        this.createLotus();
    }

    createDharmaWheel() {
        const wheelDiv = document.createElement('div');
        wheelDiv.style.cssText = `
            width: 300px;
            height: 300px;
            margin: 0 auto 2rem;
            position: relative;
            animation: rotateDharmaWheel 30s linear infinite;
        `;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '300');
        svg.setAttribute('height', '300');
        svg.setAttribute('viewBox', '0 0 300 300');

        // 외곽 원
        const outerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        outerCircle.setAttribute('cx', '150');
        outerCircle.setAttribute('cy', '150');
        outerCircle.setAttribute('r', '140');
        outerCircle.setAttribute('fill', 'none');
        outerCircle.setAttribute('stroke', '#d97706');
        outerCircle.setAttribute('stroke-width', '6');
        svg.appendChild(outerCircle);

        // 중심 원
        const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        centerCircle.setAttribute('cx', '150');
        centerCircle.setAttribute('cy', '150');
        centerCircle.setAttribute('r', '30');
        centerCircle.setAttribute('fill', '#d97706');
        svg.appendChild(centerCircle);

        // 8개의 바퀴살 (팔정도)
        const eightfoldPath = [
            '正見', '正思', '正語', '正業', '正命', '正精進', '正念', '正定'
        ];

        for (let i = 0; i < 8; i++) {
            const angle = (i * 45 - 90) * Math.PI / 180;
            const x1 = 150 + 30 * Math.cos(angle);
            const y1 = 150 + 30 * Math.sin(angle);
            const x2 = 150 + 140 * Math.cos(angle);
            const y2 = 150 + 140 * Math.sin(angle);

            // 바퀴살
            const spoke = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            spoke.setAttribute('x1', x1);
            spoke.setAttribute('y1', y1);
            spoke.setAttribute('x2', x2);
            spoke.setAttribute('y2', y2);
            spoke.setAttribute('stroke', '#d97706');
            spoke.setAttribute('stroke-width', '4');
            svg.appendChild(spoke);

            // 팔정도 텍스트
            const textX = 150 + 160 * Math.cos(angle);
            const textY = 150 + 160 * Math.sin(angle);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', textX);
            text.setAttribute('y', textY);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'middle');
            text.setAttribute('fill', '#d97706');
            text.setAttribute('font-size', '16');
            text.setAttribute('font-weight', 'bold');
            text.textContent = eightfoldPath[i];
            svg.appendChild(text);
        }

        wheelDiv.appendChild(svg);
        this.container.appendChild(wheelDiv);

        // 법륜 설명
        const desc = document.createElement('div');
        desc.style.cssText = `
            text-align: center;
            margin-bottom: 2rem;
            padding: 1rem;
            background: linear-gradient(135deg, rgba(217, 119, 6, 0.05) 0%, rgba(217, 119, 6, 0.1) 100%);
            border-radius: 10px;
        `;
        desc.innerHTML = `
            <h3 style="color: #d97706; margin: 0.5rem 0;">法輪 (법륜) - 八正道</h3>
            <p style="color: #666; margin: 0;">바른 길로 가는 여덟 가지 방법</p>
        `;
        this.container.appendChild(desc);

        // 회전 애니메이션
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rotateDharmaWheel {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    createLotus() {
        const lotusDiv = document.createElement('div');
        lotusDiv.style.cssText = `
            width: 300px;
            height: 200px;
            margin: 0 auto;
            position: relative;
            perspective: 1000px;
        `;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '300');
        svg.setAttribute('height', '200');
        svg.setAttribute('viewBox', '0 0 300 200');

        // 연꽃 꽃잎들
        const petals = [
            { x: 150, y: 100, rotate: 0, scale: 1 },
            { x: 150, y: 100, rotate: 45, scale: 0.9 },
            { x: 150, y: 100, rotate: 90, scale: 0.95 },
            { x: 150, y: 100, rotate: 135, scale: 0.85 },
            { x: 150, y: 100, rotate: 180, scale: 1 },
            { x: 150, y: 100, rotate: 225, scale: 0.9 },
            { x: 150, y: 100, rotate: 270, scale: 0.95 },
            { x: 150, y: 100, rotate: 315, scale: 0.85 }
        ];

        petals.forEach((petal, index) => {
            const petalGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            petalGroup.setAttribute('transform', `rotate(${petal.rotate} ${petal.x} ${petal.y})`);
            petalGroup.style.animation = `bloomPetal 3s ease-in-out ${index * 0.1}s infinite alternate`;

            const petalPath = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
            petalPath.setAttribute('cx', petal.x);
            petalPath.setAttribute('cy', petal.y - 30);
            petalPath.setAttribute('rx', 20 * petal.scale);
            petalPath.setAttribute('ry', 40 * petal.scale);
            petalPath.setAttribute('fill', `rgba(217, 119, 6, ${0.6 + index * 0.05})`);
            petalPath.setAttribute('stroke', '#d97706');
            petalPath.setAttribute('stroke-width', '2');

            petalGroup.appendChild(petalPath);
            svg.appendChild(petalGroup);
        });

        // 연꽃 중심
        const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        center.setAttribute('cx', '150');
        center.setAttribute('cy', '100');
        center.setAttribute('r', '15');
        center.setAttribute('fill', '#fbbf24');
        svg.appendChild(center);

        lotusDiv.appendChild(svg);
        this.container.appendChild(lotusDiv);

        // 연꽃 설명
        const lotusDesc = document.createElement('div');
        lotusDesc.style.cssText = `
            text-align: center;
            margin-top: 1rem;
            padding: 1rem;
            background: linear-gradient(135deg, rgba(217, 119, 6, 0.05) 0%, rgba(217, 119, 6, 0.1) 100%);
            border-radius: 10px;
        `;
        lotusDesc.innerHTML = `
            <h3 style="color: #d97706; margin: 0.5rem 0;">蓮花 (연화)</h3>
            <p style="color: #666; margin: 0;">진흙에서 피어나 깨끗함을 상징</p>
        `;
        this.container.appendChild(lotusDesc);

        // 꽃잎 애니메이션
        const style = document.createElement('style');
        style.textContent = `
            @keyframes bloomPetal {
                from { transform: scale(1); opacity: 0.8; }
                to { transform: scale(1.1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

console.log('✅ Symbols.js 로드 완료: 동양 철학 상징물 시각화');
