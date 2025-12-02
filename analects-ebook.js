// 논어 E-Book JavaScript (전체 버전 with 애니메이션)

// 논어 전체 데이터 (20편의 핵심 구절 포함)
const analectsData = {
    ko: [ // 한글
        {
            isCover: true,
            title: "論語",
            titleKo: "논어",
            subtitle: "공자의 말씀",
            author: "孔子",
            authorKo: "공자",
            description: "동양문화사",
            color: "#8b0000",
            pattern: "crimson"
        },
        {
            chapter: "제1편 학이 (學而)",
            passages: [
                {
                    number: "1.1",
                    text: "학이시습지(學而時習之) 불역열호(不亦說乎) 유붕자원방래(有朋自遠方來) 불역락호(不亦樂乎) 인부지이불온(人不知而不慍) 불역군자호(不亦君子乎)",
                    translation: "배우고 때때로 익히면 또한 기쁘지 아니한가. 벗이 먼 곳에서 찾아오면 또한 즐겁지 아니한가. 남이 알아주지 않아도 성내지 않으면 또한 군자답지 아니한가.",
                    commentary: "『논어』의 첫 구절로, 학문의 즐거움과 군자의 품격을 제시합니다.",
                    terms: {
                        "學而時習之": "배움을 때에 맞춰 반복하여 익힘",
                        "君子": "덕이 있는 사람. 유교 이상의 인격자"
                    }
                },
                {
                    number: "1.2",
                    text: "군자무본(君子務本) 본립이도생(本立而道生)",
                    translation: "군자는 근본에 힘쓴다. 근본이 서면 도가 생긴다.",
                    commentary: "효제(孝悌)가 인(仁)의 근본임을 강조합니다.",
                    terms: {
                        "本": "근본, 뿌리",
                        "道": "길, 진리, 올바른 삶의 방식"
                    }
                },
                {
                    number: "1.4",
                    text: "증자왈(曾子曰) 오일삼성오신(吾日三省吾身)",
                    translation: "증자가 말하길, 나는 하루에 세 번 내 몸을 반성한다.",
                    commentary: "매일 자기 반성의 중요성을 강조합니다.",
                    terms: {
                        "曾子": "증자, 공자의 제자. 효경의 전승자",
                        "三省": "세 가지로 반성함"
                    }
                }
            ]
        },
        {
            chapter: "제2편 위정 (為政)",
            passages: [
                {
                    number: "2.1",
                    text: "위정이덕(為政以德) 비여북신거기소(譬如北辰居其所) 이중성공지(而眾星共之)",
                    translation: "정치를 덕으로 하면 마치 북극성이 제자리에 있으되 뭇 별이 그것에 향하는 것과 같다.",
                    commentary: "덕치주의의 핵심을 보여줍니다.",
                    terms: {
                        "德": "덕, 도덕적 품성",
                        "北辰": "북극성"
                    }
                },
                {
                    number: "2.4",
                    text: "오십유오이지우학(吾十有五而志于學) 삼십이립(三十而立) 사십이불혹(四十而不惑) 오십이지천명(五十而知天命)",
                    translation: "나는 열다섯에 학문에 뜻을 두었고, 서른에 자립했으며, 마흔에 미혹됨이 없었고, 쉰에 천명을 알았다.",
                    commentary: "공자의 생애를 통한 수양의 단계입니다.",
                    terms: {
                        "志于學": "학문에 뜻을 둠",
                        "而立": "홀로 섬",
                        "天命": "하늘의 명, 자신의 사명"
                    }
                },
                {
                    number: "2.11",
                    text: "온고이지신(溫故而知新) 가이위사의(可以為師矣)",
                    translation: "옛것을 익혀 새것을 알면 스승이 될 수 있다.",
                    commentary: "전통과 혁신의 조화를 강조합니다.",
                    terms: {
                        "溫故": "옛것을 되새김",
                        "知新": "새것을 앎"
                    }
                },
                {
                    number: "2.17",
                    text: "지지위지지(知之為知之) 부지위부지(不知為不知) 시지야(是知也)",
                    translation: "아는 것을 안다 하고 모르는 것을 모른다 하는 것, 이것이 아는 것이다.",
                    commentary: "진정한 앎의 태도를 말합니다.",
                    terms: {
                        "知": "알다, 지혜"
                    }
                }
            ]
        },
        {
            chapter: "제3편 팔일 (八佾)",
            passages: [
                {
                    number: "3.3",
                    text: "인이불인(人而不仁) 여례하(如禮何)",
                    translation: "사람이 인하지 않으면 예를 어찌하겠는가.",
                    commentary: "예악의 근본은 인(仁)임을 강조합니다.",
                    terms: {
                        "仁": "사람다움, 인간애",
                        "禮": "예의, 의례"
                    }
                },
                {
                    number: "3.12",
                    text: "제여신여신재(祭如在祭神如神在)",
                    translation: "제사 지낼 때는 신이 계신 것처럼, 신께 제사할 때는 신이 계신 것처럼 한다.",
                    commentary: "정성과 경건함의 중요성을 말합니다.",
                    terms: {
                        "祭": "제사",
                        "神": "신, 귀신"
                    }
                }
            ]
        },
        {
            chapter: "제4편 이인 (里仁)",
            passages: [
                {
                    number: "4.1",
                    text: "이인위미(里仁為美) 택불처인(擇不處仁) 언득지(焉得知)",
                    translation: "인한 곳에 사는 것이 아름답다. 택하되 인에 처하지 않으면 어찌 지혜롭다 하겠는가.",
                    commentary: "인한 환경의 중요성을 강조합니다.",
                    terms: {
                        "里": "마을, 거처",
                        "仁": "인, 사람다움"
                    }
                },
                {
                    number: "4.5",
                    text: "부귀어아여부운(富貴於我如浮雲)",
                    translation: "부귀가 나에게는 뜬구름과 같다.",
                    commentary: "물질적 가치보다 도덕적 가치를 우선합니다.",
                    terms: {
                        "富貴": "부와 귀함",
                        "浮雲": "뜬구름"
                    }
                },
                {
                    number: "4.16",
                    text: "군자유어의(君子喻於義) 소인유어리(小人喻於利)",
                    translation: "군자는 의리를 밝히고, 소인은 이익을 밝힌다.",
                    commentary: "군자와 소인의 가치관 차이입니다.",
                    terms: {
                        "義": "의리, 정의",
                        "小人": "덕이 부족한 사람",
                        "利": "이익"
                    }
                },
                {
                    number: "4.24",
                    text: "군자욕눌어언(君子欲訥於言) 이민어행(而敏於行)",
                    translation: "군자는 말은 더디게 하려 하고 행동은 민첩하게 하려 한다.",
                    commentary: "말보다 실천을 강조합니다.",
                    terms: {
                        "訥": "말이 더딤",
                        "敏": "민첩함"
                    }
                }
            ]
        },
        {
            chapter: "제5편 공야장 (公冶長)",
            passages: [
                {
                    number: "5.9",
                    text: "자공문왈(子貢問曰) 사여회야숙현(賜與回也孰賢)",
                    translation: "자공이 물었다. 저와 안회 중 누가 더 어질니까?",
                    commentary: "안회의 학문적 경지를 칭찬합니다.",
                    terms: {
                        "子貢": "자공, 공자의 제자",
                        "回": "안회, 공자가 가장 아낀 제자"
                    }
                },
                {
                    number: "5.26",
                    text: "안연계회왈(顔淵季路侍) 자왈(子曰) 성언이지야(盍各言爾志)",
                    translation: "안연과 자로가 모시고 있을 때, 공자가 말했다. 각자의 뜻을 말해보라.",
                    commentary: "제자들의 이상을 묻는 장면입니다.",
                    terms: {
                        "顔淵": "안회의 자",
                        "季路": "자로, 공자의 제자"
                    }
                }
            ]
        },
        {
            chapter: "제6편 옹야 (雍也)",
            passages: [
                {
                    number: "6.20",
                    text: "지자요수(知者樂水) 인자요산(仁者樂山)",
                    translation: "지혜로운 자는 물을 좋아하고, 인한 자는 산을 좋아한다.",
                    commentary: "지혜와 인의 특성을 자연에 비유합니다.",
                    terms: {
                        "知者": "지혜로운 사람",
                        "仁者": "인한 사람"
                    }
                },
                {
                    number: "6.28",
                    text: "인원호재기(仁遠乎哉) 아욕인(我欲仁) 사인지의(斯仁至矣)",
                    translation: "인이 멀리 있겠는가? 내가 인을 하고자 하면 인이 이르는 것이다.",
                    commentary: "인은 마음먹기에 달렸음을 말합니다.",
                    terms: {
                        "仁": "인, 사람다움"
                    }
                }
            ]
        },
        {
            chapter: "제7편 술이 (述而)",
            passages: [
                {
                    number: "7.1",
                    text: "술이불작(述而不作) 신이호고(信而好古)",
                    translation: "기술할 뿐 짓지 않으며, 믿고 옛것을 좋아한다.",
                    commentary: "공자의 학문적 태도를 보여줍니다.",
                    terms: {
                        "述": "전하다, 기술하다",
                        "作": "짓다, 창작하다"
                    }
                },
                {
                    number: "7.8",
                    text: "불분불계(不憤不啓) 불비불발(不悱不發)",
                    translation: "답답해하지 않으면 깨우쳐 주지 않고, 말하려 하지 않으면 열어주지 않는다.",
                    commentary: "교육의 적절한 시기를 강조합니다.",
                    terms: {
                        "憤": "답답해함",
                        "啓": "깨우침",
                        "悱": "말하려 해도 못함"
                    }
                },
                {
                    number: "7.16",
                    text: "삼인행(三人行) 필유아사언(必有我師焉)",
                    translation: "세 사람이 가면 반드시 나의 스승이 있다.",
                    commentary: "배움의 기회는 어디에나 있음을 말합니다.",
                    terms: {
                        "師": "스승"
                    }
                },
                {
                    number: "7.22",
                    text: "자소사(子素四) 무의무필무고무아(毋意毋必毋固毋我)",
                    translation: "공자께서는 네 가지가 없으셨다. 뜻대로 하지 않고, 반드시 그래야 한다 하지 않고, 고집하지 않고, 나를 내세우지 않으셨다.",
                    commentary: "공자의 태도를 보여줍니다.",
                    terms: {
                        "意": "억측",
                        "必": "반드시",
                        "固": "고집",
                        "我": "자아"
                    }
                }
            ]
        },
        {
            chapter: "제8편 태백 (泰伯)",
            passages: [
                {
                    number: "8.7",
                    text: "증자왈(曾子曰) 사불가이불홍의(士不可以不弘毅) 임중이도원(任重而道遠)",
                    translation: "증자가 말했다. 선비는 굳세고 용감하지 않을 수 없으니, 짐이 무겁고 길이 멀기 때문이다.",
                    commentary: "선비의 책임감을 강조합니다.",
                    terms: {
                        "弘毅": "넓고 굳셈",
                        "任": "책임, 짐"
                    }
                },
                {
                    number: "8.13",
                    text: "독신독행(篤信好學) 수사이선도(守死善道)",
                    translation: "돈독히 믿고 배우기를 좋아하며, 죽음으로써 도를 지킨다.",
                    commentary: "학문과 도에 대한 신념을 말합니다.",
                    terms: {
                        "篤信": "돈독히 믿음",
                        "善道": "도를 선하게 함"
                    }
                }
            ]
        },
        {
            chapter: "제9편 자한 (子罕)",
            passages: [
                {
                    number: "9.4",
                    text: "자절사(子絶四) 무의무필무고무아(毋意毋必毋固毋我)",
                    translation: "공자께서 끊으신 것이 네 가지이니, 억측함이 없고 반드시함이 없고 고집함이 없고 나를 내세움이 없으셨다.",
                    commentary: "공자의 태도를 재강조합니다.",
                    terms: {}
                },
                {
                    number: "9.26",
                    text: "삼군가탈수야(三軍可奪帥也) 필부불가탈지야(匹夫不可奪志也)",
                    translation: "삼군의 장수는 빼앗을 수 있어도, 필부의 뜻은 빼앗을 수 없다.",
                    commentary: "의지의 중요성을 강조합니다.",
                    terms: {
                        "三軍": "군대",
                        "匹夫": "보통 사람",
                        "志": "뜻"
                    }
                }
            ]
        },
        {
            chapter: "제10편 향당 (鄕黨)",
            passages: [
                {
                    number: "10.1",
                    text: "공자어향당(孔子於鄕黨) 공공여(恂恂如也) 사불능언자(似不能言者)",
                    translation: "공자께서 고향 마을에서는 공손하고 온화하시어 말을 못하는 사람 같으셨다.",
                    commentary: "공자의 겸손한 태도를 보여줍니다.",
                    terms: {
                        "鄕黨": "고향 마을",
                        "恂恂": "공손하고 온화한 모습"
                    }
                }
            ]
        },
        {
            chapter: "제11편 선진 (先進)",
            passages: [
                {
                    number: "11.12",
                    text: "계로문사귀신(季路問事鬼神) 자왈(子曰) 미능사인(未能事人) 언능사귀(焉能事鬼)",
                    translation: "자로가 귀신 섬기는 것을 물었다. 공자께서 말씀하셨다. 사람도 섬기지 못하는데 어찌 귀신을 섬기겠는가.",
                    commentary: "현실 윤리를 우선시하는 공자의 태도입니다.",
                    terms: {
                        "鬼神": "귀신",
                        "事": "섬기다"
                    }
                },
                {
                    number: "11.26",
                    text: "안연사(顔淵死) 자곡지통(子哭之痛)",
                    translation: "안연이 죽으니 공자께서 통곡하셨다.",
                    commentary: "애제자 안회의 죽음을 슬퍼합니다.",
                    terms: {
                        "顔淵": "안회"
                    }
                }
            ]
        },
        {
            chapter: "제12편 안연 (顔淵)",
            passages: [
                {
                    number: "12.1",
                    text: "안연문인(顔淵問仁) 자왈(子曰) 극기복례위인(克己復禮為仁)",
                    translation: "안연이 인을 물으니 공자께서 말씀하셨다. 자기를 이기고 예로 돌아가는 것이 인이다.",
                    commentary: "인의 핵심을 설명합니다.",
                    terms: {
                        "克己": "자기를 이김",
                        "復禮": "예로 돌아감"
                    }
                },
                {
                    number: "12.2",
                    text: "중궁문인(仲弓問仁) 자왈(子曰) 기소불욕(己所不欲) 물시어인(勿施於人)",
                    translation: "중궁이 인을 물으니 공자께서 말씀하셨다. 자기가 하고 싶지 않은 것을 남에게 시키지 말라.",
                    commentary: "서(恕)의 정신을 말합니다.",
                    terms: {
                        "己所不欲": "자기가 원하지 않는 것",
                        "勿施於人": "남에게 베풀지 말라"
                    }
                }
            ]
        },
        {
            chapter: "제13편 자로 (子路)",
            passages: [
                {
                    number: "13.3",
                    text: "자로왈(子路曰) 위군대자(衛君待子) 이위정(而爲政) 자장하선(子將何先)",
                    translation: "자로가 말했다. 위나라 군주가 선생님을 기다려 정치를 하시려 하는데, 선생님께서는 무엇을 먼저 하시겠습니까?",
                    commentary: "정명(正名)사상을 보여줍니다.",
                    terms: {
                        "衛君": "위나라 군주",
                        "政": "정치"
                    }
                },
                {
                    number: "13.13",
                    text: "기신이정(其身正) 불령이행(不令而行) 기신불정(其身不正) 수령부종(雖令不從)",
                    translation: "그 몸이 바르면 명령하지 않아도 행해지고, 그 몸이 바르지 않으면 비록 명령해도 따르지 않는다.",
                    commentary: "솔선수범의 중요성을 강조합니다.",
                    terms: {
                        "身": "몸, 자신",
                        "正": "바름"
                    }
                }
            ]
        },
        {
            chapter: "제14편 헌문 (憲問)",
            passages: [
                {
                    number: "14.24",
                    text: "자왈(子曰) 군자상달(君子上達) 소인하달(小人下達)",
                    translation: "공자께서 말씀하셨다. 군자는 위로 통달하고, 소인은 아래로 통달한다.",
                    commentary: "군자와 소인의 방향성 차이를 말합니다.",
                    terms: {
                        "上達": "위로 통달함, 도를 지향함",
                        "下達": "아래로 통달함, 이익을 추구함"
                    }
                },
                {
                    number: "14.34",
                    text: "혹왈(或曰) 이덕보원(以德報怨) 하여(何如)",
                    translation: "어떤 사람이 물었다. 덕으로 원한을 갚으면 어떻습니까?",
                    commentary: "공정한 보복과 은혜의 구분을 말합니다.",
                    terms: {
                        "德": "덕",
                        "怨": "원한"
                    }
                }
            ]
        },
        {
            chapter: "제15편 위령공 (衛靈公)",
            passages: [
                {
                    number: "15.2",
                    text: "자왈(子曰) 사(賜)야 여이여(女以予)위다학이식지자여(爲多學而識之者與)",
                    translation: "공자께서 말씀하셨다. 사야, 너는 나를 많이 배워 아는 사람으로 생각하느냐?",
                    commentary: "일이관지(一以貫之)의 정신을 말합니다.",
                    terms: {
                        "賜": "자공의 이름",
                        "識": "기억하다"
                    }
                },
                {
                    number: "15.24",
                    text: "자공문왈(子貢問曰) 유일언(有一言) 이가종신행지자호(而可終身行之者乎)",
                    translation: "자공이 물었다. 한 마디 말로 종신토록 행할 만한 것이 있습니까?",
                    commentary: "서(恕)의 정신을 강조합니다.",
                    terms: {
                        "一言": "한 마디 말",
                        "恕": "용서, 이해"
                    }
                }
            ]
        },
        {
            chapter: "제16편 계씨 (季氏)",
            passages: [
                {
                    number: "16.4",
                    text: "공자왈(孔子曰) 익자삼우(益者三友) 손자삼우(損者三友)",
                    translation: "공자께서 말씀하셨다. 유익한 벗이 셋이요, 해로운 벗이 셋이다.",
                    commentary: "좋은 벗의 중요성을 말합니다.",
                    terms: {
                        "益": "이롭다",
                        "損": "해롭다",
                        "友": "벗"
                    }
                },
                {
                    number: "16.8",
                    text: "공자왈(孔子曰) 군자유삼외(君子有三畏)",
                    translation: "공자께서 말씀하셨다. 군자에게는 세 가지 두려워하는 것이 있다.",
                    commentary: "경외심의 중요성을 강조합니다.",
                    terms: {
                        "畏": "두려워함, 경외함"
                    }
                }
            ]
        },
        {
            chapter: "제17편 양화 (陽貨)",
            passages: [
                {
                    number: "17.2",
                    text: "자왈(子曰) 성상근야(性相近也) 습상원야(習相遠也)",
                    translation: "공자께서 말씀하셨다. 본성은 서로 가까우나, 습관에 따라 서로 멀어진다.",
                    commentary: "교육의 중요성을 강조합니다.",
                    terms: {
                        "性": "본성",
                        "習": "습관"
                    }
                }
            ]
        },
        {
            chapter: "제18편 미자 (微子)",
            passages: [
                {
                    number: "18.6",
                    text: "장저조적(長沮桀溺) 병경이경(耦而耕)",
                    translation: "장저와 걸익이 함께 밭을 갈고 있었다.",
                    commentary: "은자들의 삶을 보여줍니다.",
                    terms: {
                        "長沮": "은자의 이름",
                        "耕": "밭갈다"
                    }
                }
            ]
        },
        {
            chapter: "제19편 자장 (子張)",
            passages: [
                {
                    number: "19.1",
                    text: "자장왈(子張曰) 사견위수명(士見危授命) 견득사의(見得思義)",
                    translation: "자장이 말했다. 선비는 위태로움을 보면 목숨을 바치고, 이득을 보면 의를 생각한다.",
                    commentary: "선비의 올바른 태도를 말합니다.",
                    terms: {
                        "士": "선비",
                        "危": "위태로움",
                        "義": "의리"
                    }
                }
            ]
        },
        {
            chapter: "제20편 요왈 (堯曰)",
            passages: [
                {
                    number: "20.1",
                    text: "요왈(堯曰) 자이순(咨爾舜) 천지력수(天之曆數) 재이궁(在爾躬)",
                    translation: "요가 말했다. 아, 너 순이여! 하늘의 역수가 네 몸에 있도다.",
                    commentary: "요 임금의 선양을 기록합니다.",
                    terms: {
                        "堯": "요 임금",
                        "舜": "순 임금",
                        "曆數": "천명"
                    }
                },
                {
                    number: "20.3",
                    text: "공자왈(孔子曰) 부지명(不知命) 무이위군자야(無以爲君子也)",
                    translation: "공자께서 말씀하셨다. 천명을 알지 못하면 군자가 될 수 없다.",
                    commentary: "천명을 아는 것의 중요성을 말합니다.",
                    terms: {
                        "命": "천명, 하늘의 뜻"
                    }
                }
            ]
        },
        {
            isBackCover: true,
            title: "論語",
            titleKo: "논어",
            message: "배움의 즐거움과 실천의 지혜",
            footer: "東洋文化社",
            color: "#8b0000",
            pattern: "crimson"
        }
    ],
    zh: [ // 中文
        {
            isCover: true,
            title: "論語",
            titleKo: "论语",
            subtitle: "孔子之言",
            author: "孔子",
            authorKo: "孔子",
            description: "東洋文化社",
            color: "#8b0000",
            pattern: "crimson"
        },
        {
            chapter: "第一篇 學而",
            passages: [
                {
                    number: "1.1",
                    text: "學而時習之，不亦說乎？有朋自遠方來，不亦樂乎？人不知而不慍，不亦君子乎？",
                    translation: "学习并时常温习，不也很愉快吗？有朋友从远方来，不也很快乐吗？别人不了解自己而不恼怒，不也是君子吗？",
                    commentary: "《论语》的首句，提出了学问的乐趣与君子的品格。",
                    terms: {}
                },
                {
                    number: "1.2",
                    text: "君子務本，本立而道生。",
                    translation: "君子致力于根本，根本确立了，道就产生了。",
                    commentary: "强调孝悌是仁的根本。",
                    terms: {}
                },
                {
                    number: "1.4",
                    text: "曾子曰：吾日三省吾身。",
                    translation: "曾子说：我每天三次反省自己。",
                    commentary: "每日自我反省的重要性。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第二篇 為政",
            passages: [
                {
                    number: "2.1",
                    text: "為政以德，譬如北辰居其所，而眾星共之。",
                    translation: "以德治国，就像北极星处在它的位置，众星围绕着它。",
                    commentary: "德治主义的核心。",
                    terms: {}
                },
                {
                    number: "2.4",
                    text: "吾十有五而志于學，三十而立，四十而不惑，五十而知天命。",
                    translation: "我十五岁立志于学问，三十岁能够自立，四十岁不受迷惑，五十岁知晓天命。",
                    commentary: "孔子通过自己的人生阶段描述了修养的过程。",
                    terms: {}
                },
                {
                    number: "2.11",
                    text: "溫故而知新，可以為師矣。",
                    translation: "温习旧知识而获得新理解，可以成为老师了。",
                    commentary: "强调传统与创新的和谐。",
                    terms: {}
                },
                {
                    number: "2.17",
                    text: "知之為知之，不知為不知，是知也。",
                    translation: "知道就说知道，不知道就说不知道，这才是真知。",
                    commentary: "真正的知识态度。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第四篇 里仁",
            passages: [
                {
                    number: "4.15",
                    text: "吾道一以貫之。",
                    translation: "我的道用一个原则贯穿始终。",
                    commentary: "孔子思想的核心统一性。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第六篇 雍也",
            passages: [
                {
                    number: "6.23",
                    text: "知者樂水，仁者樂山。",
                    translation: "智者喜欢水，仁者喜欢山。",
                    commentary: "智与仁的不同性格特征。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第七篇 述而",
            passages: [
                {
                    number: "7.8",
                    text: "不憤不啟，不悱不發。",
                    translation: "不到苦思冥想时不去启发，不到欲说无言时不去开导。",
                    commentary: "孔子的教育方法论。",
                    terms: {}
                },
                {
                    number: "7.22",
                    text: "三人行，必有我師焉。",
                    translation: "三个人同行，必定有我的老师。",
                    commentary: "谦虚学习的态度。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第九篇 子罕",
            passages: [
                {
                    number: "9.11",
                    text: "子在川上曰：逝者如斯夫，不舍晝夜。",
                    translation: "孔子在河边说：逝去的时光就像这流水，日夜不停。",
                    commentary: "感叹时光流逝，劝人珍惜时间。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第十二篇 顏淵",
            passages: [
                {
                    number: "12.1",
                    text: "克己復禮為仁。",
                    translation: "克制自己回归礼，就是仁。",
                    commentary: "仁的实践方法。",
                    terms: {}
                },
                {
                    number: "12.2",
                    text: "己所不欲，勿施於人。",
                    translation: "自己不想要的，不要施加给别人。",
                    commentary: "儒家的黄金法则。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第十五篇 衛靈公",
            passages: [
                {
                    number: "15.24",
                    text: "己所不欲，勿施於人。",
                    translation: "自己不想要的，不要施加给别人。",
                    commentary: "儒家的黄金法则。",
                    terms: {}
                },
                {
                    number: "15.29",
                    text: "人能弘道，非道弘人。",
                    translation: "人能够弘扬道，而不是道弘扬人。",
                    commentary: "强调人的主体性。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第十六篇 季氏",
            passages: [
                {
                    number: "16.9",
                    text: "君子有三戒：少之時，血氣未定，戒之在色。",
                    translation: "君子有三戒：年少时血气未定，要戒色欲。",
                    commentary: "人生不同阶段的修养。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第十七篇 陽貨",
            passages: [
                {
                    number: "17.2",
                    text: "性相近也，習相遠也。",
                    translation: "人性本来相近，习惯使人相距甚远。",
                    commentary: "论述人性与教育的关系。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第十九篇 子張",
            passages: [
                {
                    number: "19.6",
                    text: "君子有三變：望之儼然，即之也溫，聽其言也厲。",
                    translation: "君子有三种变化：远看庄严，接近温和，听他说话严厉。",
                    commentary: "君子的外在形象。",
                    terms: {}
                }
            ]
        },
        {
            chapter: "第二十篇 堯曰",
            passages: [
                {
                    number: "20.3",
                    text: "孔子曰：不知命，無以為君子也。",
                    translation: "孔子说：不知天命，就无法成为君子。",
                    commentary: "知天命的重要性。",
                    terms: {}
                }
            ]
        },
        {
            isBackCover: true,
            title: "論語",
            titleKo: "论语",
            message: "学习的乐趣与实践的智慧",
            footer: "東洋文化社",
            color: "#8b0000",
            pattern: "crimson"
        }
    ],
    en: [ // English
        {
            isCover: true,
            title: "論語",
            titleKo: "The Analects",
            subtitle: "Teachings of Confucius",
            author: "孔子",
            authorKo: "Confucius",
            description: "Oriental Culture Press",
            color: "#8b0000",
            pattern: "crimson"
        },
        {
            chapter: "Book I - Learning",
            passages: [
                {
                    number: "1.1",
                    text: "學而時習之，不亦說乎？有朋自遠方來，不亦樂乎？人不知而不慍，不亦君子乎？",
                    translation: "Is it not pleasant to learn and practice what you have learned? Is it not delightful to have friends come from afar? Is it not gentlemanly not to take offense when others fail to recognize your abilities?",
                    commentary: "The opening passage of the Analects, introducing the joy of learning and the character of a gentleman.",
                    terms: {}
                },
                {
                    number: "1.2",
                    text: "君子務本，本立而道生。",
                    translation: "The gentleman devotes his efforts to the roots. Once the roots are established, the Way will grow.",
                    commentary: "Emphasizes that filial piety and fraternal duty are the root of humaneness.",
                    terms: {}
                },
                {
                    number: "1.4",
                    text: "曾子曰：吾日三省吾身。",
                    translation: "Zengzi said: I examine myself three times a day.",
                    commentary: "The importance of daily self-reflection.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Book II - Governing",
            passages: [
                {
                    number: "2.1",
                    text: "為政以德，譬如北辰居其所，而眾星共之。",
                    translation: "Govern with virtue, and you will be like the North Star, which remains in its place while all other stars revolve around it.",
                    commentary: "The core of governance through virtue.",
                    terms: {}
                },
                {
                    number: "2.4",
                    text: "吾十有五而志于學，三十而立，四十而不惑，五十而知天命。",
                    translation: "At fifteen, I set my heart on learning. At thirty, I established myself. At forty, I had no doubts. At fifty, I knew the will of Heaven.",
                    commentary: "Confucius describes the stages of his personal cultivation.",
                    terms: {}
                },
                {
                    number: "2.11",
                    text: "溫故而知新，可以為師矣。",
                    translation: "By reviewing the old, one learns the new. Such a person can be a teacher.",
                    commentary: "Emphasizes harmony between tradition and innovation.",
                    terms: {}
                },
                {
                    number: "2.17",
                    text: "知之為知之，不知為不知，是知也。",
                    translation: "To know what you know and what you do not know, that is true knowledge.",
                    commentary: "The attitude of true knowledge.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Book IV - On Virtue",
            passages: [
                {
                    number: "4.15",
                    text: "吾道一以貫之。",
                    translation: "My Way is bound together by one thread.",
                    commentary: "The unity at the core of Confucian thought.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Book VI - Yong Ye",
            passages: [
                {
                    number: "6.23",
                    text: "知者樂水，仁者樂山。",
                    translation: "The wise find joy in water; the virtuous find joy in mountains.",
                    commentary: "Different characteristics of wisdom and virtue.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Book VII -述而",
            passages: [
                {
                    number: "7.8",
                    text: "不憤不啟，不悱不發。",
                    translation: "I do not enlighten those who are not eager to learn, nor arouse those who are not trying to express themselves.",
                    commentary: "Confucius' methodology of education.",
                    terms: {}
                },
                {
                    number: "7.22",
                    text: "三人行，必有我師焉。",
                    translation: "When walking with two others, I will certainly find a teacher among them.",
                    commentary: "The attitude of humble learning.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Book IX - Zi Han",
            passages: [
                {
                    number: "9.11",
                    text: "子在川上曰：逝者如斯夫，不舍晝夜。",
                    translation: "The Master standing by a river said: What passes away is like this, flowing day and night without cease.",
                    commentary: "Lamenting the passage of time, urging people to cherish it.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Book XII - Yan Yuan",
            passages: [
                {
                    number: "12.1",
                    text: "克己復禮為仁。",
                    translation: "To overcome the self and return to propriety is humaneness.",
                    commentary: "The practical method of humaneness.",
                    terms: {}
                },
                {
                    number: "12.2",
                    text: "己所不欲，勿施於人。",
                    translation: "What you do not wish for yourself, do not impose on others.",
                    commentary: "The Confucian Golden Rule.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Book XV - Duke Ling of Wei",
            passages: [
                {
                    number: "15.24",
                    text: "己所不欲，勿施於人。",
                    translation: "What you do not wish for yourself, do not impose on others.",
                    commentary: "The Confucian Golden Rule.",
                    terms: {}
                },
                {
                    number: "15.29",
                    text: "人能弘道，非道弘人。",
                    translation: "It is the person who can make the Way great, not the Way that makes the person great.",
                    commentary: "Emphasizes human agency.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Book XVI - Ji Shi",
            passages: [
                {
                    number: "16.9",
                    text: "君子有三戒：少之時，血氣未定，戒之在色。",
                    translation: "The gentleman has three cautions: in youth, when the vital powers are not yet settled, guard against lust.",
                    commentary: "Cultivation at different stages of life.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Book XVII - Yang Huo",
            passages: [
                {
                    number: "17.2",
                    text: "性相近也，習相遠也。",
                    translation: "By nature, people are alike; through practice, they grow apart.",
                    commentary: "On the relationship between human nature and education.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Book XIX - Zi Zhang",
            passages: [
                {
                    number: "19.6",
                    text: "君子有三變：望之儼然，即之也溫，聽其言也厲。",
                    translation: "The gentleman undergoes three transformations: from a distance, he appears dignified; when approached, he is warm; hearing his words, he is stern.",
                    commentary: "The external image of a gentleman.",
                    terms: {}
                }
            ]
        },
        {
            chapter: "Book XX - Yao Yue",
            passages: [
                {
                    number: "20.3",
                    text: "孔子曰：不知命，無以為君子也。",
                    translation: "Confucius said: Without understanding the will of Heaven, one cannot become a gentleman.",
                    commentary: "The importance of knowing Heaven's mandate.",
                    terms: {}
                }
            ]
        },
        {
            isBackCover: true,
            title: "論語",
            titleKo: "The Analects",
            message: "The Joy of Learning and the Wisdom of Practice",
            footer: "Oriental Culture Press",
            color: "#8b0000",
            pattern: "crimson"
        }
    ]
};

// 전역 변수
let currentLanguage = 'ko';
let currentPage = 0;
let totalPages = 0;
let isAnimating = false; // 애니메이션 중 플래그

// E-Book 열기
function openAnalectsEbook() {
    const modal = document.getElementById('analectsEbook');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 초기 페이지 렌더링
    currentPage = 0;
    renderEbookPages();
}

// E-Book 닫기
function closeAnalectsEbook() {
    const modal = document.getElementById('analectsEbook');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 언어 전환
function switchEbookLanguage(lang) {
    if (isAnimating) return;
    
    currentLanguage = lang;
    currentPage = 0;
    
    // 버튼 상태 업데이트
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // 페이지 다시 렌더링
    renderEbookPages();
}

// 페이지 렌더링 (고퀄리티 애니메이션 포함)
function renderEbookPages(animate = false, direction = 'next') {
    const data = analectsData[currentLanguage];
    const leftPage = document.getElementById('ebookPageLeft');
    const rightPage = document.getElementById('ebookPageRight');
    
    // 데이터가 없는 경우
    if (!data || data.length === 0) {
        leftPage.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;">이 언어로는 아직 내용이 준비되지 않았습니다.</div>';
        rightPage.innerHTML = '';
        return;
    }
    
    // 총 페이지 수 계산
    totalPages = data.length;
    
    // 페이지 범위 확인
    if (currentPage >= totalPages) {
        currentPage = totalPages - 1;
    }
    if (currentPage < 0) {
        currentPage = 0;
    }
    
    // 고퀄리티 애니메이션 처리
    if (animate) {
        console.log('🎬 애니메이션 시작!', { direction, currentPage });
        isAnimating = true;
        
        // 기존 애니메이션 클래스 완전 제거
        leftPage.className = 'page-content ebook-page ebook-page-left';
        rightPage.className = 'page-content ebook-page ebook-page-right';
        
        // 강제 리플로우
        void leftPage.offsetWidth;
        void rightPage.offsetWidth;
        
        // 애니메이션 시작
        if (direction === 'next') {
            console.log('➡️ 오른쪽 페이지 넘김 시작');
            rightPage.classList.add('page-turning-next');
            rightPage.style.zIndex = '100';
        } else {
            console.log('⬅️ 왼쪽 페이지 넘김 시작');
            leftPage.classList.add('page-turning-prev');
            leftPage.style.zIndex = '100';
        }
        
        // 애니메이션 중간 지점에서 내용 업데이트 (최적화된 타이밍)
        setTimeout(() => {
            console.log('🔄 페이지 내용 업데이트 중...');
            updatePageContent();
            
            // 애니메이션 클래스 제거
            leftPage.classList.remove('page-turning-next', 'page-turning-prev');
            rightPage.classList.remove('page-turning-next', 'page-turning-prev');
            leftPage.style.zIndex = '1';
            rightPage.style.zIndex = '1';
            
            // 나타나기 효과 추가
            leftPage.classList.add('page-appear');
            rightPage.classList.add('page-appear');
            
            console.log('✨ 새 페이지 나타남');
            
            // 나타나기 애니메이션 완료 후 정리 (0.5초)
            setTimeout(() => {
                leftPage.classList.remove('page-appear');
                rightPage.classList.remove('page-appear');
                isAnimating = false;
                console.log('✅ 애니메이션 완료!');
            }, 500);
        }, 400); // 0.8초 애니메이션의 절반 시점
    } else {
        console.log('⚡ 애니메이션 없이 즉시 업데이트');
        updatePageContent();
    }
}

// 페이지 내용 업데이트
function updatePageContent() {
    const data = analectsData[currentLanguage];
    const leftPage = document.getElementById('ebookPageLeft');
    const rightPage = document.getElementById('ebookPageRight');
    
    // 왼쪽 페이지 (현재 페이지)
    if (currentPage < totalPages) {
        leftPage.innerHTML = generatePageContent(data[currentPage]);
        leftPage.className = 'page-content' + (currentLanguage === 'zh' ? ' lang-zh' : '');
        document.getElementById('pageNumLeft').textContent = currentPage + 1;
    } else {
        leftPage.innerHTML = '';
        document.getElementById('pageNumLeft').textContent = '';
    }
    
    // 오른쪽 페이지 (다음 페이지)
    if (currentPage + 1 < totalPages) {
        rightPage.innerHTML = generatePageContent(data[currentPage + 1]);
        rightPage.className = 'page-content' + (currentLanguage === 'zh' ? ' lang-zh' : '');
        document.getElementById('pageNumRight').textContent = currentPage + 2;
    } else {
        rightPage.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;font-style:italic;">— 끝 —</div>';
        document.getElementById('pageNumRight').textContent = '';
    }
    
    // 네비게이션 업데이트
    document.getElementById('currentPageNum').textContent = currentPage + 1;
    document.getElementById('totalPageNum').textContent = totalPages;
    
    // 버튼 상태
    document.getElementById('ebookPrevBtn').disabled = currentPage === 0;
    document.getElementById('ebookNextBtn').disabled = currentPage >= totalPages - 1;
    
    // 용어 툴팁 이벤트 리스너 추가
    attachTermListeners();
}

// 페이지 내용 생성
function generatePageContent(chapter) {
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
        html += `<div class="passage-number">${passage.number}</div>`;
        
        // 본문
        if (currentLanguage === 'ko' || currentLanguage === 'en') {
            // 용어 강조 처리
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
        } else {
            html += `<div class="passage-text">${passage.text}</div>`;
        }
        
        // 번역 (한글일 때만 표시)
        if (currentLanguage === 'ko' && passage.translation) {
            html += `<div class="passage-translation">${passage.translation}</div>`;
        }
        
        // 해설 (한글이나 영어일 때 표시)
        if ((currentLanguage === 'ko' || currentLanguage === 'en') && passage.commentary) {
            html += `<div class="passage-translation" style="margin-top:0.5rem;font-style:normal;color:#8b4513;"><em>📝 ${passage.commentary}</em></div>`;
        }
        
        html += `</div>`;
    });
    
    return html;
}

// 이전 페이지 (애니메이션 포함)
function ebookPrevPage() {
    console.log('⬅️ 이전 페이지 버튼 클릭', { isAnimating, currentPage });
    
    if (isAnimating || currentPage <= 0) {
        console.log('❌ 애니메이션 중이거나 첫 페이지입니다.');
        return;
    }
    
    currentPage -= 2;
    if (currentPage < 0) currentPage = 0;
    
    console.log('📖 이전 페이지로 이동:', currentPage);
    renderEbookPages(true, 'prev');
}

// 다음 페이지 (애니메이션 포함)
function ebookNextPage() {
    console.log('➡️ 다음 페이지 버튼 클릭', { isAnimating, currentPage, totalPages });
    
    if (isAnimating || currentPage >= totalPages - 1) {
        console.log('❌ 애니메이션 중이거나 마지막 페이지입니다.');
        return;
    }
    
    currentPage += 2;
    
    console.log('📖 다음 페이지로 이동:', currentPage);
    renderEbookPages(true, 'next');
}

// 용어 툴팁 이벤트 리스너
function attachTermListeners() {
    const terms = document.querySelectorAll('.term');
    const tooltip = document.getElementById('termTooltip');
    
    terms.forEach(term => {
        term.addEventListener('mouseenter', function(e) {
            const termText = this.dataset.term;
            const chapter = analectsData[currentLanguage][currentPage];
            let explanation = '';
            
            // 현재 페이지와 다음 페이지에서 용어 찾기
            for (let passage of chapter.passages) {
                if (passage.terms && passage.terms[termText]) {
                    explanation = passage.terms[termText];
                    break;
                }
            }
            
            if (!explanation && currentPage + 1 < totalPages) {
                const nextChapter = analectsData[currentLanguage][currentPage + 1];
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
                
                // 위치 설정
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
        const modal = document.getElementById('analectsEbook');
        if (modal && modal.classList.contains('active')) {
            closeAnalectsEbook();
        }
    }
});

// 키보드 네비게이션
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('analectsEbook');
    if (modal && modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            ebookPrevPage();
        } else if (e.key === 'ArrowRight') {
            ebookNextPage();
        }
    }
});
