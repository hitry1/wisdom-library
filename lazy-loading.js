// ===== Lazy Loading for Images and Heavy Content =====

class LazyLoader {
    constructor() {
        this.imageObserver = null;
        this.contentObserver = null;
        this.init();
    }

    init() {
        // Intersection Observer API 지원 확인
        if ('IntersectionObserver' in window) {
            this.setupImageLazyLoading();
            this.setupContentLazyLoading();
        } else {
            // Polyfill 또는 즉시 로드
            this.loadAllImagesImmediately();
            console.warn('IntersectionObserver not supported. Loading all images immediately.');
        }
    }

    // 이미지 Lazy Loading 설정
    setupImageLazyLoading() {
        const imageObserverOptions = {
            root: null,
            rootMargin: '50px', // 50px 전에 미리 로드
            threshold: 0.01
        };

        this.imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, imageObserverOptions);

        // data-src 속성을 가진 모든 이미지 관찰
        this.observeImages();
    }

    // 이미지 관찰 시작
    observeImages() {
        const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');
        lazyImages.forEach(img => {
            this.imageObserver.observe(img);
        });
        
        console.log(`✅ Lazy Loading 설정: ${lazyImages.length}개 이미지`);
    }

    // 이미지 로드
    loadImage(img) {
        const src = img.dataset.src;
        const srcset = img.dataset.srcset;
        
        if (src) {
            img.src = src;
            img.removeAttribute('data-src');
        }
        
        if (srcset) {
            img.srcset = srcset;
            img.removeAttribute('data-srcset');
        }
        
        // 로드 완료 후 fade-in 효과
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
        
        // 로드 실패 처리
        img.addEventListener('error', () => {
            console.error('이미지 로드 실패:', src || srcset);
            img.classList.add('error');
        });
    }

    // 모든 이미지 즉시 로드 (Fallback)
    loadAllImagesImmediately() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
        });
    }

    // 콘텐츠 섹션 Lazy Loading 설정
    setupContentLazyLoading() {
        const contentObserverOptions = {
            root: null,
            rootMargin: '100px',
            threshold: 0.1
        };

        this.contentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    this.loadContent(section);
                }
            });
        }, contentObserverOptions);

        // lazy-content 클래스를 가진 모든 섹션 관찰
        const lazySections = document.querySelectorAll('.lazy-content');
        lazySections.forEach(section => {
            this.contentObserver.observe(section);
        });
    }

    // 콘텐츠 로드 (애니메이션 트리거)
    loadContent(section) {
        section.classList.add('content-visible');
        
        // 하위 요소들에 stagger 애니메이션
        const children = section.querySelectorAll('.lazy-item');
        children.forEach((child, index) => {
            setTimeout(() => {
                child.classList.add('visible');
            }, index * 100);
        });
    }

    // 새로운 이미지 추가 시 관찰 재시작
    reobserve() {
        if (this.imageObserver) {
            this.observeImages();
        }
    }
}

// 전역 인스턴스 생성
window.lazyLoader = new LazyLoader();


// ===== 동적 스크립트 로딩 =====

class ScriptLoader {
    constructor() {
        this.loadedScripts = new Set();
    }

    // 스크립트 동적 로드
    async loadScript(src, options = {}) {
        if (this.loadedScripts.has(src)) {
            console.log(`스크립트 이미 로드됨: ${src}`);
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = options.async !== false;
            script.defer = options.defer || false;
            
            if (options.integrity) {
                script.integrity = options.integrity;
                script.crossOrigin = 'anonymous';
            }
            
            script.onload = () => {
                console.log(`✅ 스크립트 로드 완료: ${src}`);
                this.loadedScripts.add(src);
                resolve();
            };
            
            script.onerror = () => {
                console.error(`❌ 스크립트 로드 실패: ${src}`);
                reject(new Error(`Failed to load script: ${src}`));
            };
            
            document.head.appendChild(script);
        });
    }

    // 여러 스크립트 순차 로드
    async loadScripts(scripts) {
        for (const script of scripts) {
            try {
                await this.loadScript(script.src, script.options);
            } catch (error) {
                console.error('스크립트 로드 에러:', error);
                if (script.required) {
                    throw error; // 필수 스크립트면 에러 전파
                }
            }
        }
    }
}

window.scriptLoader = new ScriptLoader();


// ===== CSS Lazy Loading =====

class StyleLoader {
    constructor() {
        this.loadedStyles = new Set();
    }

    // CSS 동적 로드
    loadStyle(href, media = 'all') {
        if (this.loadedStyles.has(href)) {
            console.log(`스타일 이미 로드됨: ${href}`);
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.media = media;
            
            link.onload = () => {
                console.log(`✅ 스타일 로드 완료: ${href}`);
                this.loadedStyles.add(href);
                resolve();
            };
            
            link.onerror = () => {
                console.error(`❌ 스타일 로드 실패: ${href}`);
                reject(new Error(`Failed to load style: ${href}`));
            };
            
            document.head.appendChild(link);
        });
    }

    // 조건부 스타일 로드 (예: 다크모드)
    loadConditionalStyle(condition, href) {
        if (condition()) {
            return this.loadStyle(href);
        }
        return Promise.resolve();
    }
}

window.styleLoader = new StyleLoader();


// ===== Preload Critical Resources =====

class ResourcePreloader {
    // 리소스 프리로드
    preload(href, as, options = {}) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        
        if (options.type) link.type = options.type;
        if (options.crossorigin) link.crossOrigin = options.crossorigin;
        
        document.head.appendChild(link);
        console.log(`🚀 Preloading: ${href}`);
    }

    // 리소스 프리페치 (낮은 우선순위)
    prefetch(href) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        
        document.head.appendChild(link);
        console.log(`📦 Prefetching: ${href}`);
    }

    // DNS Prefetch
    dnsPrefetch(domain) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        
        document.head.appendChild(link);
    }

    // Preconnect
    preconnect(url, crossorigin = false) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        if (crossorigin) link.crossOrigin = 'anonymous';
        
        document.head.appendChild(link);
    }
}

window.resourcePreloader = new ResourcePreloader();


// ===== Performance Monitoring =====

class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.init();
    }

    init() {
        if (window.performance && window.performance.timing) {
            window.addEventListener('load', () => {
                this.collectMetrics();
            });
        }
    }

    collectMetrics() {
        const timing = performance.timing;
        
        this.metrics = {
            // 페이지 로드 시간
            pageLoadTime: timing.loadEventEnd - timing.navigationStart,
            
            // DOM 로드 시간
            domLoadTime: timing.domContentLoadedEventEnd - timing.navigationStart,
            
            // 첫 바이트까지의 시간 (TTFB)
            ttfb: timing.responseStart - timing.navigationStart,
            
            // DOM 인터랙티브 시간
            domInteractive: timing.domInteractive - timing.navigationStart,
            
            // 리소스 로드 시간
            resourceLoadTime: timing.loadEventEnd - timing.domContentLoadedEventEnd
        };
        
        console.log('📊 Performance Metrics:', this.metrics);
        
        // Google Analytics로 전송
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_performance', {
                'event_category': 'Performance',
                'page_load_time': this.metrics.pageLoadTime,
                'dom_load_time': this.metrics.domLoadTime,
                'ttfb': this.metrics.ttfb,
                'non_interaction': true
            });
        }
        
        // Core Web Vitals 측정
        this.measureWebVitals();
    }

    measureWebVitals() {
        // LCP (Largest Contentful Paint)
        if ('PerformanceObserver' in window) {
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'web_vitals', {
                            'event_category': 'Performance',
                            'event_label': 'LCP',
                            'value': Math.round(lastEntry.renderTime || lastEntry.loadTime),
                            'non_interaction': true
                        });
                    }
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                console.warn('LCP measurement not supported');
            }

            // FID (First Input Delay)
            try {
                const fidObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        console.log('FID:', entry.processingStart - entry.startTime);
                        
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'web_vitals', {
                                'event_category': 'Performance',
                                'event_label': 'FID',
                                'value': Math.round(entry.processingStart - entry.startTime),
                                'non_interaction': true
                            });
                        }
                    });
                });
                fidObserver.observe({ entryTypes: ['first-input'] });
            } catch (e) {
                console.warn('FID measurement not supported');
            }

            // CLS (Cumulative Layout Shift)
            try {
                let clsScore = 0;
                const clsObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (!entry.hadRecentInput) {
                            clsScore += entry.value;
                        }
                    }
                    console.log('CLS:', clsScore);
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
            } catch (e) {
                console.warn('CLS measurement not supported');
            }
        }
    }

    getMetrics() {
        return this.metrics;
    }
}

window.performanceMonitor = new PerformanceMonitor();

console.log('✅ Lazy Loading & Performance 모듈 로드 완료');


