// 도덕경 E-Book JavaScript (전체 버전 with 애니메이션)

// 도덕경 전체 데이터 (81장 중 핵심 구절 포함)
const daoDeJingData = {
    ko: [ // 한글
        {
            isCover: true,
            title: "道德經",
            titleKo: "도덕경",
            subtitle: "노자의 지혜",
            author: "老子",
            authorKo: "노자",
            description: "동양문화사",
            color: "#2563eb",
            pattern: "water"
        },
        {
            chapter: "제1장",
            passages: [
                {
                    number: "1",
                    text: "도가도비상도(道可道非常道) 명가명비상명(名可名非常名)",
                    translation: "도를 도라고 말할 수 있으면 영원한 도가 아니다. 이름을 이름이라 할 수 있으면 영원한 이름이 아니다.",
                    commentary: "도덕경의 첫 구절로, 언어로 표현할 수 없는 도의 본질을 말합니다.",
                    terms: {
                        "道": "길, 진리, 우주의 근원",
                        "名": "이름, 개념"
                    }
                }
            ]
        },
        {
            chapter: "제2장",
            passages: [
                {
                    number: "2",
                    text: "천하개지미지위미(天下皆知美之爲美) 사악이(斯惡已)",
                    translation: "천하가 모두 아름다움이 아름다운 것임을 알면, 이것이 바로 추함이다.",
                    commentary: "상대적 가치의 허상을 지적합니다.",
                    terms: {
                        "美": "아름다움",
                        "惡": "추함, 악함"
                    }
                }
            ]
        },
        {
            chapter: "제3장",
            passages: [
                {
                    number: "3",
                    text: "불상현(不尙賢) 사민불쟁(使民不爭)",
                    translation: "현인을 높이지 않으면 백성들이 다투지 않는다.",
                    commentary: "무위(無爲)의 정치를 강조합니다.",
                    terms: {
                        "賢": "현명한 사람",
                        "爭": "다툼"
                    }
                }
            ]
        },
        {
            chapter: "제8장",
            passages: [
                {
                    number: "8",
                    text: "상선약수(上善若水)",
                    translation: "최고의 선은 물과 같다.",
                    commentary: "물의 덕을 본받아야 함을 말합니다.",
                    terms: {
                        "上善": "최고의 선",
                        "水": "물"
                    }
                }
            ]
        },
        {
            chapter: "제11장",
            passages: [
                {
                    number: "11",
                    text: "삼십폭공일곡(三十輻共一轂) 당기무유거지용(當其無有車之用)",
                    translation: "서른 개의 바퀴살이 하나의 바퀴통에 모이지만, 그 비어있는 곳에 수레의 쓸모가 있다.",
                    commentary: "무(無)의 쓰임을 강조합니다.",
                    terms: {
                        "轂": "바퀴통",
                        "無": "없음, 비어있음"
                    }
                }
            ]
        },
        {
            chapter: "제16장",
            passages: [
                {
                    number: "16",
                    text: "치허극(致虛極) 수정독(守靜篤)",
                    translation: "비움을 극도로 하고, 고요함을 독실하게 지킨다.",
                    commentary: "마음을 비우고 고요함을 유지하는 수양법입니다.",
                    terms: {
                        "虛": "비움",
                        "靜": "고요함"
                    }
                }
            ]
        },
        {
            chapter: "제18장",
            passages: [
                {
                    number: "18",
                    text: "대도폐(大道廢) 유인의(有仁義)",
                    translation: "큰 도가 폐해지면 인의가 생긴다.",
                    commentary: "인위적인 도덕의 한계를 지적합니다.",
                    terms: {
                        "大道": "큰 도",
                        "仁義": "인과 의"
                    }
                }
            ]
        },
        {
            chapter: "제19장",
            passages: [
                {
                    number: "19",
                    text: "절성기지(絶聖棄知) 민이백배(民利百倍)",
                    translation: "성인을 끊고 지혜를 버리면 백성의 이익이 백 배가 된다.",
                    commentary: "인위적 지혜의 폐해를 말합니다.",
                    terms: {
                        "聖": "성인",
                        "知": "지혜"
                    }
                }
            ]
        },
        {
            chapter: "제20장",
            passages: [
                {
                    number: "20",
                    text: "학문을 그만두면 근심이 없다(絶學無憂)",
                    translation: "학문을 그만두면 근심이 없다.",
                    commentary: "세속적 학문에서 벗어나 자유로워짐을 말합니다.",
                    terms: {
                        "學": "배움",
                        "憂": "근심"
                    }
                }
            ]
        },
        {
            chapter: "제22장",
            passages: [
                {
                    number: "22",
                    text: "곡즉전(曲則全) 왕즉직(枉則直)",
                    translation: "굽으면 온전하고, 구부러지면 곧아진다.",
                    commentary: "유연함의 가치를 강조합니다.",
                    terms: {
                        "曲": "굽음",
                        "全": "온전함"
                    }
                }
            ]
        },
        {
            chapter: "제25장",
            passages: [
                {
                    number: "25",
                    text: "유물혼성(有物混成) 선천지생(先天地生)",
                    translation: "어떤 것이 혼연히 이루어져 천지보다 먼저 생겼다.",
                    commentary: "도의 선천성을 설명합니다.",
                    terms: {
                        "混成": "혼연히 이루어짐",
                        "先天地": "천지보다 먼저"
                    }
                }
            ]
        },
        {
            chapter: "제28장",
            passages: [
                {
                    number: "28",
                    text: "지기웅(知其雄) 수기자(守其雌)",
                    translation: "그 웅장함을 알되 그 부드러움을 지킨다.",
                    commentary: "부드러움으로 강함을 제압함을 말합니다.",
                    terms: {
                        "雄": "수컷, 강함",
                        "雌": "암컷, 부드러움"
                    }
                }
            ]
        },
        {
            chapter: "제33장",
            passages: [
                {
                    number: "33",
                    text: "지인자지(知人者智) 자지자명(自知者明)",
                    translation: "남을 아는 자는 지혜롭고, 자기를 아는 자는 밝다.",
                    commentary: "자기 인식의 중요성을 강조합니다.",
                    terms: {
                        "智": "지혜",
                        "明": "밝음"
                    }
                }
            ]
        },
        {
            chapter: "제37장",
            passages: [
                {
                    number: "37",
                    text: "도상무위(道常無爲) 이무불위(而無不爲)",
                    translation: "도는 항상 무위하되 하지 않는 것이 없다.",
                    commentary: "무위자연의 핵심 사상입니다.",
                    terms: {
                        "無爲": "억지로 하지 않음",
                        "無不爲": "안 하는 것이 없음"
                    }
                }
            ]
        },
        {
            chapter: "제38장",
            passages: [
                {
                    number: "38",
                    text: "상덕불덕(上德不德) 시이유덕(是以有德)",
                    translation: "최고의 덕은 덕으로 여기지 않으니, 그러므로 덕이 있다.",
                    commentary: "진정한 덕은 의도하지 않음을 말합니다.",
                    terms: {
                        "上德": "최고의 덕",
                        "不德": "덕으로 여기지 않음"
                    }
                }
            ]
        },
        {
            chapter: "제42장",
            passages: [
                {
                    number: "42",
                    text: "도생일(道生一) 일생이(一生二) 이생삼(二生三) 삼생만물(三生萬物)",
                    translation: "도는 하나를 낳고, 하나는 둘을 낳고, 둘은 셋을 낳고, 셋은 만물을 낳는다.",
                    commentary: "우주 생성의 원리를 설명합니다.",
                    terms: {
                        "一": "하나, 태극",
                        "二": "둘, 음양",
                        "三": "셋, 천지인"
                    }
                }
            ]
        },
        {
            chapter: "제43장",
            passages: [
                {
                    number: "43",
                    text: "천하지지유(天下之至柔) 치천하지지강(馳天下之至剛)",
                    translation: "천하에서 가장 부드러운 것이 천하에서 가장 단단한 것을 부린다.",
                    commentary: "부드러움의 힘을 강조합니다.",
                    terms: {
                        "至柔": "가장 부드러운 것",
                        "至剛": "가장 단단한 것"
                    }
                }
            ]
        },
        {
            chapter: "제48장",
            passages: [
                {
                    number: "48",
                    text: "위학일익(爲學日益) 위도일손(爲道日損)",
                    translation: "배움을 하면 날마다 더하고, 도를 행하면 날마다 덜어진다.",
                    commentary: "학문과 도의 차이를 설명합니다.",
                    terms: {
                        "爲學": "배움을 함",
                        "爲道": "도를 행함",
                        "損": "덜어냄"
                    }
                }
            ]
        },
        {
            chapter: "제56장",
            passages: [
                {
                    number: "56",
                    text: "지자불언(知者不言) 언자부지(言者不知)",
                    translation: "아는 자는 말하지 않고, 말하는 자는 알지 못한다.",
                    commentary: "진정한 앎의 침묵을 강조합니다.",
                    terms: {
                        "知": "앎",
                        "言": "말함"
                    }
                }
            ]
        },
        {
            chapter: "제63장",
            passages: [
                {
                    number: "63",
                    text: "위무위(爲無爲) 사무사(事無事) 미무미(味無味)",
                    translation: "함이 없이 하고, 일이 없이 일하고, 맛이 없는 것을 맛본다.",
                    commentary: "무위자연의 실천을 말합니다.",
                    terms: {
                        "無爲": "억지로 하지 않음",
                        "無事": "일 삼지 않음"
                    }
                }
            ]
        },
        {
            chapter: "제64장",
            passages: [
                {
                    number: "64",
                    text: "천리지행시어족하(千里之行始於足下)",
                    translation: "천 리 길도 발 아래에서 시작한다.",
                    commentary: "작은 것에서 큰 것이 이루어짐을 말합니다.",
                    terms: {
                        "千里": "천 리",
                        "足下": "발 아래"
                    }
                }
            ]
        },
        {
            chapter: "제66장",
            passages: [
                {
                    number: "66",
                    text: "강해소이위백곡왕자(江海所以爲百谷王者) 이기선하지(以其善下之)",
                    translation: "강과 바다가 모든 골짜기의 왕이 될 수 있는 것은 스스로를 낮추기 때문이다.",
                    commentary: "겸손의 덕을 강조합니다.",
                    terms: {
                        "百谷": "모든 골짜기",
                        "善下": "잘 낮춤"
                    }
                }
            ]
        },
        {
            chapter: "제76장",
            passages: [
                {
                    number: "76",
                    text: "인지생야유이약(人之生也柔弱) 기사야견강(其死也堅強)",
                    translation: "사람이 살아있을 때는 유연하고 약하나, 죽으면 굳고 강해진다.",
                    commentary: "유연함이 생명력임을 말합니다.",
                    terms: {
                        "柔弱": "부드럽고 약함",
                        "堅強": "굳고 강함"
                    }
                }
            ]
        },
        {
            chapter: "제78장",
            passages: [
                {
                    number: "78",
                    text: "천하막유어수(天下莫柔於水) 이공견강자막지능승(而攻堅強者莫之能勝)",
                    translation: "천하에 물보다 부드러운 것이 없으나, 단단하고 강한 것을 공격하는 데는 물을 이기지 못한다.",
                    commentary: "부드러움의 승리를 강조합니다.",
                    terms: {
                        "柔": "부드러움",
                        "堅強": "단단하고 강함"
                    }
                }
            ]
        },
        {
            chapter: "제81장",
            passages: [
                {
                    number: "81",
                    text: "신언불미(信言不美) 미언불신(美言不信)",
                    translation: "믿음직한 말은 아름답지 않고, 아름다운 말은 믿음직하지 않다.",
                    commentary: "진실과 수사의 차이를 말합니다.",
                    terms: {
                        "信言": "믿음직한 말",
                        "美言": "아름다운 말"
                    }
                },
                {
                    number: "81",
                    text: "성인불적(聖人不積) 기위인이유유(旣爲人而愈有) 기여인이유다(旣予人而愈多)",
                    translation: "성인은 쌓지 않는다. 남을 위하면 자신에게 더욱 있고, 남에게 주면 자신에게 더욱 많아진다.",
                    commentary: "나눔과 베품의 역설을 말합니다.",
                    terms: {
                        "聖人": "성인",
                        "不積": "쌓지 않음"
                    }
                }
            ]
        },
        {
            isBackCover: true,
            title: "道德經",
            titleKo: "도덕경",
            message: "無爲自然 - 무위자연의 도",
            footer: "東洋文化社",
            color: "#2563eb",
            pattern: "water"
        }
    ],
    zh: [ // 中文
        {
            isCover: true,
            title: "道德經",
            titleKo: "道德经",
            subtitle: "老子之智",
            author: "老子",
            authorKo: "老子",
            description: "東洋文化社",
            color: "#2563eb",
            pattern: "water"
        },
        {
            chapter: "第一章",
            passages: [
                {
                    number: "1",
                    text: "道可道，非常道。名可名，非常名。",
                    translation: "可以说出来的道，就不是永恒的道。可以叫出来的名，就不是永恒的名。",
                    commentary: "《道德经》的开篇，说明了无法用语言表达道的本质。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第二章",
            passages: [
                {
                    number: "2",
                    text: "天下皆知美之為美，斯惡已。皆知善之為善，斯不善已。",
                    translation: "天下人都知道美之所以为美，这就已经有丑了。都知道善之所以为善，这就已经有不善了。",
                    commentary: "相对性的哲学——美与丑、善与恶都是相对的概念。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第八章",
            passages: [
                {
                    number: "8",
                    text: "上善若水。水善利萬物而不爭。",
                    translation: "最高的善就像水一样。水善于滋养万物而不与万物相争。",
                    commentary: "老子以水比喻最高的德行。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第三十三章",
            passages: [
                {
                    number: "33",
                    text: "知人者智，自知者明。",
                    translation: "了解别人的人有智慧，了解自己的人更明智。",
                    commentary: "强调自我认识的重要性。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第八十一章",
            passages: [
                {
                    number: "81",
                    text: "信言不美，美言不信。",
                    translation: "真实的话不华美，华美的话不真实。",
                    commentary: "道德经的结尾，强调朴实的智慧。",
                    terms: {}
                }
            ]
        },
        {
            isBackCover: true,
            title: "道德經",
            titleKo: "道德经",
            message: "無爲自然 - 无为自然之道",
            footer: "東洋文化社",
            color: "#2563eb",
            pattern: "water"
        }
    ],
    en: [ // English
        {
            isCover: true,
            title: "道德經",
            titleKo: "Tao Te Ching",
            subtitle: "Wisdom of Laozi",
            author: "老子",
            authorKo: "Laozi",
            description: "Oriental Culture Press",
            color: "#2563eb",
            pattern: "water"
        },
        {
            chapter: "Chapter 1",
            passages: [
                {
                    number: "1",
                    text: "道可道，非常道。名可名，非常名。",
                    translation: "The Tao that can be told is not the eternal Tao. The name that can be named is not the eternal name.",
                    commentary: "The opening of the Tao Te Ching, explaining that the essence of Tao cannot be expressed in words.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Chapter 2",
            passages: [
                {
                    number: "2",
                    text: "天下皆知美之為美，斯惡已。皆知善之為善，斯不善已。",
                    translation: "When all the world recognizes beauty as beauty, this in itself is ugliness. When all the world recognizes goodness as goodness, this in itself is evil.",
                    commentary: "The philosophy of relativity - beauty and ugliness, good and evil are relative concepts.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Chapter 8",
            passages: [
                {
                    number: "8",
                    text: "上善若水。水善利萬物而不爭。",
                    translation: "The highest good is like water. Water benefits all things and does not compete.",
                    commentary: "Laozi uses water as a metaphor for the highest virtue.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Chapter 33",
            passages: [
                {
                    number: "33",
                    text: "知人者智，自知者明。",
                    translation: "Knowing others is wisdom; knowing oneself is enlightenment.",
                    commentary: "Emphasizes the importance of self-knowledge.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Chapter 81",
            passages: [
                {
                    number: "81",
                    text: "信言不美，美言不信。",
                    translation: "True words are not beautiful; beautiful words are not true.",
                    commentary: "The conclusion of the Tao Te Ching, emphasizing simple wisdom.",
                    terms: {}
                }
            ]
        },
        {
            isBackCover: true,
            title: "道德經",
            titleKo: "Tao Te Ching",
            message: "無爲自然 - The Way of Non-Action and Nature",
            footer: "Oriental Culture Press",
            color: "#2563eb",
            pattern: "water"
        }
    ]
};

// 전역 변수
let laoziCurrentLanguage = 'ko';
let laoziCurrentPage = 0;
let laoziTotalPages = 0;
let laoziIsAnimating = false;

// E-Book 열기
function openLaoziEbook() {
    const modal = document.getElementById('laoziEbook');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    laoziCurrentPage = 0;
    renderLaoziEbookPages();
}

// E-Book 닫기
function closeLaoziEbook() {
    const modal = document.getElementById('laoziEbook');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 언어 전환
function switchLaoziLanguage(lang) {
    if (laoziIsAnimating) return;

    laoziCurrentLanguage = lang;
    laoziCurrentPage = 0;

    document.querySelectorAll('#laoziEbook .lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    renderLaoziEbookPages();
}

// 페이지 렌더링
function renderLaoziEbookPages(animate = false, direction = 'next') {
    const data = daoDeJingData[laoziCurrentLanguage];
    const leftPage = document.getElementById('laoziPageLeft');
    const rightPage = document.getElementById('laoziPageRight');

    if (!data || data.length === 0) {
        leftPage.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;">이 언어로는 아직 내용이 준비되지 않았습니다.</div>';
        rightPage.innerHTML = '';
        return;
    }

    laoziTotalPages = data.length;

    if (laoziCurrentPage >= laoziTotalPages) laoziCurrentPage = laoziTotalPages - 1;
    if (laoziCurrentPage < 0) laoziCurrentPage = 0;

    if (animate) {
        laoziIsAnimating = true;
        leftPage.className = 'page-content ebook-page ebook-page-left';
        rightPage.className = 'page-content ebook-page ebook-page-right';

        void leftPage.offsetWidth;
        void rightPage.offsetWidth;

        if (direction === 'next') {
            rightPage.classList.add('page-turning-next');
            rightPage.style.zIndex = '100';
        } else {
            leftPage.classList.add('page-turning-prev');
            leftPage.style.zIndex = '100';
        }

        setTimeout(() => {
            updateLaoziPageContent();
            leftPage.classList.remove('page-turning-next', 'page-turning-prev');
            rightPage.classList.remove('page-turning-next', 'page-turning-prev');
            leftPage.style.zIndex = '1';
            rightPage.style.zIndex = '1';
            leftPage.classList.add('page-appear');
            rightPage.classList.add('page-appear');

            setTimeout(() => {
                leftPage.classList.remove('page-appear');
                rightPage.classList.remove('page-appear');
                laoziIsAnimating = false;
            }, 500);
        }, 400);
    } else {
        updateLaoziPageContent();
    }
}

// 페이지 내용 업데이트
function updateLaoziPageContent() {
    const data = daoDeJingData[laoziCurrentLanguage];
    const leftPage = document.getElementById('laoziPageLeft');
    const rightPage = document.getElementById('laoziPageRight');

    if (laoziCurrentPage < laoziTotalPages) {
        leftPage.innerHTML = generateLaoziPageContent(data[laoziCurrentPage]);
        leftPage.className = 'page-content' + (laoziCurrentLanguage === 'zh' ? ' lang-zh' : '');
        document.getElementById('laoziPageNumLeft').textContent = laoziCurrentPage + 1;
    } else {
        leftPage.innerHTML = '';
        document.getElementById('laoziPageNumLeft').textContent = '';
    }

    if (laoziCurrentPage + 1 < laoziTotalPages) {
        rightPage.innerHTML = generateLaoziPageContent(data[laoziCurrentPage + 1]);
        rightPage.className = 'page-content' + (laoziCurrentLanguage === 'zh' ? ' lang-zh' : '');
        document.getElementById('laoziPageNumRight').textContent = laoziCurrentPage + 2;
    } else {
        rightPage.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;font-style:italic;">— 끝 —</div>';
        document.getElementById('laoziPageNumRight').textContent = '';
    }

    document.getElementById('laoziCurrentPageNum').textContent = laoziCurrentPage + 1;
    document.getElementById('laoziTotalPageNum').textContent = laoziTotalPages;

    document.getElementById('laoziPrevBtn').disabled = laoziCurrentPage === 0;
    document.getElementById('laoziNextBtn').disabled = laoziCurrentPage >= laoziTotalPages - 1;

    attachLaoziTermListeners();
}

// 페이지 내용 생성
function generateLaoziPageContent(chapter) {
    // 표지 페이지
    if (chapter.isCover) {
        return `
            <div class="book-cover" style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
                background: linear-gradient(135deg, ${chapter.color}22 0%, ${chapter.color}44 100%);
                border: 3px double ${chapter.color};
                padding: 2rem;
                text-align: center;
            ">
                <div style="font-size: 4rem; font-weight: bold; color: ${chapter.color}; margin-bottom: 1rem; font-family: serif; letter-spacing: 0.5rem;">
                    ${chapter.title}
                </div>
                <div style="font-size: 2rem; color: #333; margin-bottom: 2rem; font-weight: 500;">
                    ${chapter.titleKo}
                </div>
                <div style="font-size: 1.2rem; color: #666; margin-bottom: 3rem; font-style: italic;">
                    ${chapter.subtitle}
                </div>
                <div style="font-size: 1.5rem; color: ${chapter.color}; font-family: serif;">
                    ${chapter.author}
                </div>
                <div style="font-size: 1rem; color: #999; margin-top: 0.5rem;">
                    ${chapter.authorKo}
                </div>
                <div style="position: absolute; bottom: 2rem; font-size: 0.9rem; color: #999; letter-spacing: 0.2rem;">
                    ${chapter.description}
                </div>
            </div>
        `;
    }

    // 뒷표지 페이지
    if (chapter.isBackCover) {
        return `
            <div class="book-back-cover" style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
                background: linear-gradient(135deg, ${chapter.color}11 0%, ${chapter.color}33 100%);
                border: 3px double ${chapter.color};
                padding: 2rem;
                text-align: center;
            ">
                <div style="font-size: 2rem; font-weight: bold; color: ${chapter.color}; margin-bottom: 2rem; font-family: serif;">
                    ${chapter.title}
                </div>
                <div style="font-size: 1.5rem; color: #555; margin-bottom: 3rem; line-height: 2; font-weight: 300;">
                    ${chapter.message}
                </div>
                <div style="position: absolute; bottom: 2rem; font-size: 1rem; color: #999; letter-spacing: 0.3rem;">
                    ${chapter.footer}
                </div>
            </div>
        `;
    }

    let html = `<h2 class="chapter-title">${chapter.chapter}</h2>`;

    chapter.passages.forEach(passage => {
        html += `<div class="passage">`;
        html += `<div class="passage-number">${passage.number}장</div>`;

        let textWithTerms = passage.text;
        if (passage.terms && Object.keys(passage.terms).length > 0) {
            Object.keys(passage.terms).forEach(term => {
                const regex = new RegExp(term, 'g');
                textWithTerms = textWithTerms.replace(regex,
                    `<span class="term" data-term="${term}">${term}</span>`
                );
            });
        }
        html += `<div class="passage-text">${textWithTerms}</div>`;

        if (laoziCurrentLanguage === 'ko' && passage.translation) {
            html += `<div class="passage-translation">${passage.translation}</div>`;
        }

        if ((laoziCurrentLanguage === 'ko' || laoziCurrentLanguage === 'en') && passage.commentary) {
            html += `<div class="passage-translation" style="margin-top:0.5rem;font-style:normal;color:#8b4513;"><em>📝 ${passage.commentary}</em></div>`;
        }

        html += `</div>`;
    });

    return html;
}

// 이전 페이지
function laoziPrevPage() {
    if (laoziIsAnimating || laoziCurrentPage <= 0) return;

    laoziCurrentPage -= 2;
    if (laoziCurrentPage < 0) laoziCurrentPage = 0;

    renderLaoziEbookPages(true, 'prev');
}

// 다음 페이지
function laoziNextPage() {
    if (laoziIsAnimating || laoziCurrentPage >= laoziTotalPages - 1) return;

    laoziCurrentPage += 2;

    renderLaoziEbookPages(true, 'next');
}

// 용어 툴팁 이벤트 리스너
function attachLaoziTermListeners() {
    const terms = document.querySelectorAll('#laoziEbook .term');
    const tooltip = document.getElementById('laoziTermTooltip');

    terms.forEach(term => {
        term.addEventListener('mouseenter', function(e) {
            const termText = this.dataset.term;
            const chapter = daoDeJingData[laoziCurrentLanguage][laoziCurrentPage];
            let explanation = '';

            for (let passage of chapter.passages) {
                if (passage.terms && passage.terms[termText]) {
                    explanation = passage.terms[termText];
                    break;
                }
            }

            if (!explanation && laoziCurrentPage + 1 < laoziTotalPages) {
                const nextChapter = daoDeJingData[laoziCurrentLanguage][laoziCurrentPage + 1];
                for (let passage of nextChapter.passages) {
                    if (passage.terms && passage.terms[termText]) {
                        explanation = passage.terms[termText];
                        break;
                    }
                }
            }

            if (explanation) {
                tooltip.querySelector('.tooltip-title').textContent = termText;
                tooltip.querySelector('.tooltip-text').textContent = explanation;

                const rect = this.getBoundingClientRect();
                tooltip.style.display = 'block';
                tooltip.style.left = rect.left + 'px';
                tooltip.style.top = (rect.bottom + 10) + 'px';
            }
        });

        term.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('laoziEbook');
        if (modal && modal.classList.contains('active')) {
            closeLaoziEbook();
        }
    }
});

// 키보드 네비게이션
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('laoziEbook');
    if (modal && modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            laoziPrevPage();
        } else if (e.key === 'ArrowRight') {
            laoziNextPage();
        }
    }
});
