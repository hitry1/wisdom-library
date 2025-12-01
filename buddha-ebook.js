// 법구경 E-Book JavaScript (전체 버전 with 애니메이션)

// 법구경 전체 데이터 (26품 중 핵심 구절 포함)
const dhammpadaData = {
    ko: [ // 한글
        {
            isCover: true,
            title: "法句經",
            titleKo: "법구경",
            subtitle: "석가모니의 가르침",
            author: "釋迦牟尼",
            authorKo: "석가모니",
            description: "동양문화사",
            color: "#d97706",
            pattern: "lotus"
        },
        {
            chapter: "제1품 쌍품(雙品, Yamakavagga)",
            passages: [
                {
                    number: "1-2",
                    text: "마음이 모든 것을 이끈다(諸法意先導)",
                    translation: "모든 것은 마음이 앞서고, 마음이 으뜸이며, 마음으로 이루어진다. 악한 마음으로 말하거나 행동하면 괴로움이 따르고, 깨끗한 마음으로 말하거나 행동하면 즐거움이 따른다.",
                    commentary: "법구경의 첫 구절로, 마음이 모든 행위의 근본임을 밝힙니다.",
                    terms: {
                        "諸法": "모든 것, 모든 법",
                        "意": "마음"
                    }
                }
            ]
        },
        {
            chapter: "제2품 불방일품(不放逸品, Appamadavagga)",
            passages: [
                {
                    number: "21",
                    text: "불방일은 불사의 길(不放逸者不死)",
                    translation: "불방일은 불사의 길이요, 방일은 죽음의 길이다. 불방일한 사람은 죽지 않고, 방일한 사람은 이미 죽은 것과 같다.",
                    commentary: "깨어있음의 중요성을 강조합니다.",
                    terms: {
                        "不放逸": "게으르지 않음, 항상 깨어있음",
                        "放逸": "게으름, 방종"
                    }
                }
            ]
        },
        {
            chapter: "제3품 심품(心品, Cittavagga)",
            passages: [
                {
                    number: "33",
                    text: "마음을 조복하라",
                    translation: "가볍게 흔들리고 붙잡기 어렵고 욕망을 쫓아 움직이는 마음을, 지혜로운 이는 바르게 한다. 마치 화살 만드는 장인이 화살을 곧게 하듯이.",
                    commentary: "마음의 통제가 수행의 핵심임을 말합니다.",
                    terms: {
                        "心": "마음",
                        "調伏": "조복함, 길들임"
                    }
                }
            ]
        },
        {
            chapter: "제4품 화품(華品, Pupphavagga)",
            passages: [
                {
                    number: "44-45",
                    text: "누가 이 땅을 이기랴",
                    translation: "누가 이 땅과 저승과 천상을 이기랴. 누가 잘 설해진 법구를 꽃을 고르듯 고르랴. 수행자가 이 땅과 저승과 천상을 이기고, 수행자가 잘 설해진 법구를 꽃을 고르듯 고른다.",
                    commentary: "지혜로 세계를 이해함을 말합니다.",
                    terms: {
                        "法句": "법구, 진리의 말씀",
                        "勝": "이김"
                    }
                }
            ]
        },
        {
            chapter: "제5품 어리석은 자품(愚品, Balavagga)",
            passages: [
                {
                    number: "60",
                    text: "깨어있는 자에게는 밤이 길다",
                    translation: "깨어있는 자에게는 밤이 길고, 지친 자에게는 길이 멀고, 바른 법을 모르는 어리석은 자들에게는 윤회가 길다.",
                    commentary: "무지의 고통을 설명합니다.",
                    terms: {
                        "輪廻": "윤회, 생사의 되풀이",
                        "正法": "바른 법"
                    }
                }
            ]
        },
        {
            chapter: "제6품 현자품(賢品, Panditavagga)",
            passages: [
                {
                    number: "76",
                    text: "허물을 보이는 자를 보면",
                    translation: "허물을 보이고 꾸짖는 지혜로운 이를 보거든 숨은 보물을 가리키는 이처럼 여기고 가까이 하라. 그런 이를 가까이 하면 좋아질 것이요 나빠지지 않는다.",
                    commentary: "스승의 가르침을 받아들이는 태도를 말합니다.",
                    terms: {
                        "賢者": "지혜로운 자",
                        "過": "허물"
                    }
                }
            ]
        },
        {
            chapter: "제7품 아라한품(阿羅漢品, Arahantavagga)",
            passages: [
                {
                    number: "92",
                    text: "집착이 없는 자",
                    translation: "집착이 사라지고 음식에 탐닉하지 않으며, 공과 무상을 해탈의 경지로 아는 이들의 행적은 새가 하늘을 날아간 것처럼 알기 어렵다.",
                    commentary: "깨달은 자의 경지를 설명합니다.",
                    terms: {
                        "阿羅漢": "아라한, 깨달은 성자",
                        "解脫": "해탈, 번뇌에서 벗어남"
                    }
                }
            ]
        },
        {
            chapter: "제8품 천품(千品, Sahassavagga)",
            passages: [
                {
                    number: "100",
                    text: "천 마디 말보다 한 마디 유익한 말",
                    translation: "쓸데없는 말 천 마디보다, 듣고서 마음이 고요해지는 유익한 말 한 마디가 낫다.",
                    commentary: "진리의 말 하나가 중요함을 강조합니다.",
                    terms: {
                        "千": "천",
                        "一": "하나"
                    }
                }
            ]
        },
        {
            chapter: "제9품 악품(惡品, Papavagga)",
            passages: [
                {
                    number: "116",
                    text: "선을 서둘러 행하라",
                    translation: "선을 서둘러 행하라. 악으로부터 마음을 물리치라. 선을 행함에 더디면 마음은 악을 즐긴다.",
                    commentary: "선행의 중요성을 강조합니다.",
                    terms: {
                        "善": "선, 좋은 일",
                        "惡": "악, 나쁜 일"
                    }
                }
            ]
        },
        {
            chapter: "제10품 형벌품(刑罰品, Dandavagga)",
            passages: [
                {
                    number: "129-130",
                    text: "모든 이가 형벌을 두려워한다",
                    translation: "모든 이가 형벌을 두려워하고, 모든 이가 죽음을 두려워한다. 자신을 남에 견주어 죽이지도 말고 죽이게 하지도 말라.",
                    commentary: "불살생의 근거를 자비심에서 찾습니다.",
                    terms: {
                        "刑罰": "형벌",
                        "不殺生": "죽이지 않음"
                    }
                }
            ]
        },
        {
            chapter: "제11품 노품(老品, Jaravagga)",
            passages: [
                {
                    number: "146",
                    text: "무엇을 웃고 무엇을 기뻐하랴",
                    translation: "이 세상은 항상 불타고 있는데 무엇을 웃고 무엇을 기뻐하랴. 어둠에 덮여 있으니 등불을 찾지 않으랴.",
                    commentary: "세상의 무상함과 깨달음의 필요성을 말합니다.",
                    terms: {
                        "無常": "무상, 변하지 않는 것이 없음",
                        "燈": "등불, 지혜"
                    }
                }
            ]
        },
        {
            chapter: "제12품 자기품(自己品, Attavagga)",
            passages: [
                {
                    number: "157",
                    text: "자기를 사랑하거든",
                    translation: "자기를 진정 사랑하거든 자기를 잘 지키라. 밤을 세 시기로 나누어 적어도 한 시기는 깨어 지키라.",
                    commentary: "자기 수양의 중요성을 강조합니다.",
                    terms: {
                        "自己": "자기 자신",
                        "護": "지킴"
                    }
                }
            ]
        },
        {
            chapter: "제13품 세간품(世間品, Lokavagga)",
            passages: [
                {
                    number: "170",
                    text: "거품 같은 세상",
                    translation: "거품을 보듯이 이 세상을 보라. 아지랑이를 보듯이 이 세상을 보라. 그렇게 세상을 보는 자를 죽음의 왕이 보지 못한다.",
                    commentary: "세상의 허망함을 깨달음을 말합니다.",
                    terms: {
                        "泡沫": "거품",
                        "陽炎": "아지랑이"
                    }
                }
            ]
        },
        {
            chapter: "제14품 부처님품(佛陀品, Buddhavagga)",
            passages: [
                {
                    number: "183",
                    text: "모든 악을 짓지 말고",
                    translation: "모든 악을 짓지 말고, 모든 선을 받들어 행하며, 스스로 그 마음을 깨끗이 하라. 이것이 모든 부처님의 가르침이다.",
                    commentary: "불교의 핵심 가르침을 요약합니다.",
                    terms: {
                        "諸惡莫作": "모든 악을 짓지 말라",
                        "眾善奉行": "모든 선을 받들어 행하라",
                        "自淨其意": "스스로 마음을 깨끗이 하라"
                    }
                }
            ]
        },
        {
            chapter: "제15품 안락품(安樂品, Sukhavagga)",
            passages: [
                {
                    number: "197",
                    text: "원한은 원한으로 풀리지 않는다",
                    translation: "이 세상에서 원한은 원한으로 풀리지 않고, 원한 없음으로만 풀린다. 이것은 영원한 진리이다.",
                    commentary: "자비와 용서의 가르침입니다.",
                    terms: {
                        "怨": "원한",
                        "慈悲": "자비"
                    }
                }
            ]
        },
        {
            chapter: "제16품 애호품(愛好品, Piyavagga)",
            passages: [
                {
                    number: "209",
                    text: "해서는 안 될 일에 힘쓰고",
                    translation: "해서는 안 될 일에 힘쓰고 해야 할 일을 하지 않으며, 교만하고 방종한 자에게는 번뇌가 늘어난다.",
                    commentary: "바른 노력의 중요성을 말합니다.",
                    terms: {
                        "非所應作": "해서는 안 될 일",
                        "煩惱": "번뇌"
                    }
                }
            ]
        },
        {
            chapter: "제17품 분노품(忿怒品, Kodhavagga)",
            passages: [
                {
                    number: "221",
                    text: "분노를 버리고",
                    translation: "분노를 버리고 자만을 떨쳐내며 모든 속박을 넘어서라. 몸과 마음에 집착하지 않는 자에게는 괴로움이 따르지 않는다.",
                    commentary: "분노의 해로움을 경계합니다.",
                    terms: {
                        "忿怒": "분노",
                        "慢": "교만"
                    }
                }
            ]
        },
        {
            chapter: "제18품 구예품(垢穢品, Malavagga)",
            passages: [
                {
                    number: "239",
                    text: "조금씩 조금씩",
                    translation: "조금씩 조금씩 때때로 순간마다, 지혜로운 이는 자신의 때를 닦아내라. 마치 은장이가 은의 때를 닦아내듯이.",
                    commentary: "점진적인 수행의 중요성을 강조합니다.",
                    terms: {
                        "垢": "때, 번뇌",
                        "智者": "지혜로운 자"
                    }
                }
            ]
        },
        {
            chapter: "제19품 법주품(法住品, Dhammatthavagga)",
            passages: [
                {
                    number: "256",
                    text: "섣부른 판단을 하지 말라",
                    translation: "함부로 판단한다고 정의로운 것이 아니다. 지혜로운 이는 옳고 그름 모두를 판단하여 스스로 법을 따르고 남을 법으로 인도한다.",
                    commentary: "지혜로운 판단의 중요성을 말합니다.",
                    terms: {
                        "法": "법, 진리",
                        "判斷": "판단"
                    }
                }
            ]
        },
        {
            chapter: "제20품 도품(道品, Maggavagga)",
            passages: [
                {
                    number: "273-274",
                    text: "팔정도가 최고의 길",
                    translation: "모든 길 중에 팔정도가 최고이고, 모든 진리 중에 사성제가 최고이며, 모든 덕 중에 무욕이 최고이고, 모든 사람 중에 눈 있는 이가 최고이다.",
                    commentary: "불교 수행의 핵심 도를 제시합니다.",
                    terms: {
                        "八正道": "팔정도, 여덟 가지 올바른 길",
                        "四聖諦": "사성제, 네 가지 성스러운 진리"
                    }
                }
            ]
        },
        {
            chapter: "제21품 잡품(雜品, Pakinnakavagga)",
            passages: [
                {
                    number: "290",
                    text: "작은 즐거움을 버려",
                    translation: "작은 즐거움을 버려 큰 즐거움을 얻을 수 있다면, 지혜로운 이는 큰 즐거움을 위해 작은 즐거움을 버린다.",
                    commentary: "올바른 선택의 지혜를 말합니다.",
                    terms: {
                        "小樂": "작은 즐거움",
                        "大樂": "큰 즐거움"
                    }
                }
            ]
        },
        {
            chapter: "제22품 지옥품(地獄品, Nirayavagga)",
            passages: [
                {
                    number: "306",
                    text: "거짓말하는 자",
                    translation: "거짓말하는 자, 행한 일을 부정하는 자, 이 두 부류는 죽어서 같은 곳으로 간다. 비천한 행실을 한 자들이기 때문이다.",
                    commentary: "악업의 결과를 경계합니다.",
                    terms: {
                        "妄語": "거짓말",
                        "惡業": "악업"
                    }
                }
            ]
        },
        {
            chapter: "제23품 코끼리품(象品, Nagavagga)",
            passages: [
                {
                    number: "324",
                    text: "조련된 코끼리처럼",
                    translation: "나는 악한 말을 참으리라. 마치 전쟁터의 코끼리가 활에서 쏜 화살을 참듯이. 세상 사람들은 계행이 없는 자가 많으니.",
                    commentary: "인욕의 덕을 강조합니다.",
                    terms: {
                        "象": "코끼리",
                        "忍辱": "참을성"
                    }
                }
            ]
        },
        {
            chapter: "제24품 애욕품(愛欲品, Tanhavagga)",
            passages: [
                {
                    number: "334",
                    text: "갈애는 자라나고",
                    translation: "방일한 자의 갈애는 덩굴처럼 자라나 원숭이가 숲에서 과일을 찾듯 이 몸 저 몸으로 윤회한다.",
                    commentary: "욕망의 위험성을 경계합니다.",
                    terms: {
                        "渴愛": "갈애, 욕망",
                        "輪廻": "윤회"
                    }
                }
            ]
        },
        {
            chapter: "제25품 비구품(比丘品, Bhikkhuvagga)",
            passages: [
                {
                    number: "360",
                    text: "눈을 지키는 것이 좋고",
                    translation: "눈을 지키는 것이 좋고, 귀를 지키는 것이 좋으며, 코를 지키는 것이 좋고, 혀를 지키는 것이 좋다.",
                    commentary: "감각을 절제하는 수행을 말합니다.",
                    terms: {
                        "比丘": "비구, 수행승",
                        "護根": "감각기관을 지킴"
                    }
                }
            ]
        },
        {
            chapter: "제26품 바라문품(婆羅門品, Brahmanavagga)",
            passages: [
                {
                    number: "383",
                    text: "흐름을 끊어라",
                    translation: "용감하게 흐름을 끊어라, 바라문이여. 욕망을 버려라, 바라문이여. 형성된 것들의 소멸을 알면 그대는 만들어지지 않은 것을 아는 자가 되리라.",
                    commentary: "집착의 흐름을 끊음을 말합니다.",
                    terms: {
                        "婆羅門": "바라문, 성자",
                        "流": "흐름, 번뇌의 흐름"
                    }
                },
                {
                    number: "423",
                    text: "그를 나는 바라문이라 부른다",
                    translation: "이 세상과 저 세상 모두를 버리고 집착 없이 속박에서 해탈한 자, 그를 나는 바라문이라 부른다.",
                    commentary: "진정한 성자의 모습을 제시합니다.",
                    terms: {
                        "解脫": "해탈",
                        "無著": "집착이 없음"
                    }
                }
            ]
        },
        {
            isBackCover: true,
            title: "法句經",
            titleKo: "법구경",
            message: "諸惡莫作 衆善奉行 - 모든 악을 짓지 말고 모든 선을 받들어 행하라",
            footer: "東洋文化社",
            color: "#d97706",
            pattern: "lotus"
        }
    ],
    zh: [ // 中文
        {
            isCover: true,
            title: "法句經",
            titleKo: "法句经",
            subtitle: "釋迦牟尼之教",
            author: "釋迦牟尼",
            authorKo: "释迦牟尼",
            description: "東洋文化社",
            color: "#d97706",
            pattern: "lotus"
        },
        {
            chapter: "第一品 雙品",
            passages: [
                {
                    number: "1-2",
                    text: "諸法意先導",
                    translation: "一切由心造。以恶心说话或行事，痛苦会随之而来；以净心说话或行事，快乐会随之而来。",
                    commentary: "《法句经》的开篇，说明心是一切行为的根本。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第二品 不放逸品",
            passages: [
                {
                    number: "21",
                    text: "不放逸是不死道，放逸是死路。",
                    translation: "不放逸的人不会死亡，放逸的人如同已经死了。",
                    commentary: "强调精进修行的重要性。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第六品 智者品",
            passages: [
                {
                    number: "76",
                    text: "若見他人過失，當視為善知識。",
                    translation: "如果看到别人的过失，应该把他当作善知识。",
                    commentary: "通过观察他人的错误来反省自己。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第十四品 佛陀品",
            passages: [
                {
                    number: "183",
                    text: "諸惡莫作，眾善奉行，自淨其意，是諸佛教。",
                    translation: "不作任何恶事，奉行一切善事，净化自己的心意，这就是诸佛的教导。",
                    commentary: "佛教的核心教义。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第二十六品 婆羅門品",
            passages: [
                {
                    number: "420",
                    text: "無著無縛，是真婆羅門。",
                    translation: "没有执着、没有束缚的人，才是真正的婆罗门。",
                    commentary: "真正的解脱来自于内心的自由。",
                    terms: {}
                }
            ]
        },
        {
            isBackCover: true,
            title: "法句經",
            titleKo: "法句经",
            message: "諸惡莫作 衆善奉行 - 不作恶行 奉行善业",
            footer: "東洋文化社",
            color: "#d97706",
            pattern: "lotus"
        }
    ],
    en: [ // English
        {
            isCover: true,
            title: "法句經",
            titleKo: "Dhammapada",
            subtitle: "Teachings of Buddha",
            author: "釋迦牟尼",
            authorKo: "Gautama Buddha",
            description: "Oriental Culture Press",
            color: "#d97706",
            pattern: "lotus"
        },
        {
            chapter: "Chapter 1 - The Pairs",
            passages: [
                {
                    number: "1-2",
                    text: "諸法意先導",
                    translation: "All that we are is the result of what we have thought. If one speaks or acts with an evil mind, suffering follows. If one speaks or acts with a pure mind, happiness follows.",
                    commentary: "The opening of the Dhammapada, revealing that the mind is the foundation of all actions.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Chapter 2 - Vigilance",
            passages: [
                {
                    number: "21",
                    text: "不放逸是不死道，放逸是死路。",
                    translation: "Vigilance is the path to immortality. Negligence is the path to death.",
                    commentary: "Emphasizes the importance of diligent practice.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Chapter 6 - The Wise",
            passages: [
                {
                    number: "76",
                    text: "若見他人過失，當視為善知識。",
                    translation: "If you see the faults of others, regard them as your teachers.",
                    commentary: "Reflect on yourself by observing the mistakes of others.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Chapter 14 - The Buddha",
            passages: [
                {
                    number: "183",
                    text: "諸惡莫作，眾善奉行，自淨其意，是諸佛教。",
                    translation: "To avoid all evil, to cultivate good, and to purify one's mind - this is the teaching of all Buddhas.",
                    commentary: "The core teaching of Buddhism.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Chapter 26 - The Brahmin",
            passages: [
                {
                    number: "420",
                    text: "無著無縛，是真婆羅門。",
                    translation: "One who is without attachment and free from bonds is a true Brahmin.",
                    commentary: "True liberation comes from inner freedom.",
                    terms: {}
                }
            ]
        },
        {
            isBackCover: true,
            title: "法句經",
            titleKo: "Dhammapada",
            message: "諸惡莫作 衆善奉行 - Cease from Evil, Do Good",
            footer: "Oriental Culture Press",
            color: "#d97706",
            pattern: "lotus"
        }
    ]
};

// 전역 변수
let buddhaCurrentLanguage = 'ko';
let buddhaCurrentPage = 0;
let buddhaTotalPages = 0;
let buddhaIsAnimating = false;

// E-Book 열기
function openBuddhaEbook() {
    const modal = document.getElementById('buddhaEbook');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    buddhaCurrentPage = 0;
    renderBuddhaEbookPages();
}

// E-Book 닫기
function closeBuddhaEbook() {
    const modal = document.getElementById('buddhaEbook');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 언어 전환
function switchBuddhaLanguage(lang) {
    if (buddhaIsAnimating) return;

    buddhaCurrentLanguage = lang;
    buddhaCurrentPage = 0;

    document.querySelectorAll('#buddhaEbook .lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    renderBuddhaEbookPages();
}

// 페이지 렌더링
function renderBuddhaEbookPages(animate = false, direction = 'next') {
    const data = dhammpadaData[buddhaCurrentLanguage];
    const leftPage = document.getElementById('buddhaPageLeft');
    const rightPage = document.getElementById('buddhaPageRight');

    if (!data || data.length === 0) {
        leftPage.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;">이 언어로는 아직 내용이 준비되지 않았습니다.</div>';
        rightPage.innerHTML = '';
        return;
    }

    buddhaTotalPages = data.length;

    if (buddhaCurrentPage >= buddhaTotalPages) buddhaCurrentPage = buddhaTotalPages - 1;
    if (buddhaCurrentPage < 0) buddhaCurrentPage = 0;

    if (animate) {
        buddhaIsAnimating = true;
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
            updateBuddhaPageContent();
            leftPage.classList.remove('page-turning-next', 'page-turning-prev');
            rightPage.classList.remove('page-turning-next', 'page-turning-prev');
            leftPage.style.zIndex = '1';
            rightPage.style.zIndex = '1';
            leftPage.classList.add('page-appear');
            rightPage.classList.add('page-appear');

            setTimeout(() => {
                leftPage.classList.remove('page-appear');
                rightPage.classList.remove('page-appear');
                buddhaIsAnimating = false;
            }, 500);
        }, 400);
    } else {
        updateBuddhaPageContent();
    }
}

// 페이지 내용 업데이트
function updateBuddhaPageContent() {
    const data = dhammpadaData[buddhaCurrentLanguage];
    const leftPage = document.getElementById('buddhaPageLeft');
    const rightPage = document.getElementById('buddhaPageRight');

    if (buddhaCurrentPage < buddhaTotalPages) {
        leftPage.innerHTML = generateBuddhaPageContent(data[buddhaCurrentPage]);
        leftPage.className = 'page-content' + (buddhaCurrentLanguage === 'zh' ? ' lang-zh' : '');
        document.getElementById('buddhaPageNumLeft').textContent = buddhaCurrentPage + 1;
    } else {
        leftPage.innerHTML = '';
        document.getElementById('buddhaPageNumLeft').textContent = '';
    }

    if (buddhaCurrentPage + 1 < buddhaTotalPages) {
        rightPage.innerHTML = generateBuddhaPageContent(data[buddhaCurrentPage + 1]);
        rightPage.className = 'page-content' + (buddhaCurrentLanguage === 'zh' ? ' lang-zh' : '');
        document.getElementById('buddhaPageNumRight').textContent = buddhaCurrentPage + 2;
    } else {
        rightPage.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;font-style:italic;">— 끝 —</div>';
        document.getElementById('buddhaPageNumRight').textContent = '';
    }

    document.getElementById('buddhaCurrentPageNum').textContent = buddhaCurrentPage + 1;
    document.getElementById('buddhaTotalPageNum').textContent = buddhaTotalPages;

    document.getElementById('buddhaPrevBtn').disabled = buddhaCurrentPage === 0;
    document.getElementById('buddhaNextBtn').disabled = buddhaCurrentPage >= buddhaTotalPages - 1;

    attachBuddhaTermListeners();
}

// 페이지 내용 생성
function generateBuddhaPageContent(chapter) {
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
        html += `<div class="passage-number">제${passage.number}송</div>`;

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

        if (buddhaCurrentLanguage === 'ko' && passage.translation) {
            html += `<div class="passage-translation">${passage.translation}</div>`;
        }

        if ((buddhaCurrentLanguage === 'ko' || buddhaCurrentLanguage === 'en') && passage.commentary) {
            html += `<div class="passage-translation" style="margin-top:0.5rem;font-style:normal;color:#8b4513;"><em>📝 ${passage.commentary}</em></div>`;
        }

        html += `</div>`;
    });

    return html;
}

// 이전 페이지
function buddhaPrevPage() {
    if (buddhaIsAnimating || buddhaCurrentPage <= 0) return;

    buddhaCurrentPage -= 2;
    if (buddhaCurrentPage < 0) buddhaCurrentPage = 0;

    renderBuddhaEbookPages(true, 'prev');
}

// 다음 페이지
function buddhaNextPage() {
    if (buddhaIsAnimating || buddhaCurrentPage >= buddhaTotalPages - 1) return;

    buddhaCurrentPage += 2;

    renderBuddhaEbookPages(true, 'next');
}

// 용어 툴팁 이벤트 리스너
function attachBuddhaTermListeners() {
    const terms = document.querySelectorAll('#buddhaEbook .term');
    const tooltip = document.getElementById('buddhaTermTooltip');

    terms.forEach(term => {
        term.addEventListener('mouseenter', function(e) {
            const termText = this.dataset.term;
            const chapter = dhammpadaData[buddhaCurrentLanguage][buddhaCurrentPage];
            let explanation = '';

            for (let passage of chapter.passages) {
                if (passage.terms && passage.terms[termText]) {
                    explanation = passage.terms[termText];
                    break;
                }
            }

            if (!explanation && buddhaCurrentPage + 1 < buddhaTotalPages) {
                const nextChapter = dhammpadaData[buddhaCurrentLanguage][buddhaCurrentPage + 1];
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
        const modal = document.getElementById('buddhaEbook');
        if (modal && modal.classList.contains('active')) {
            closeBuddhaEbook();
        }
    }
});

// 키보드 네비게이션
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('buddhaEbook');
    if (modal && modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            buddhaPrevPage();
        } else if (e.key === 'ArrowRight') {
            buddhaNextPage();
        }
    }
});
