export const FRIENDLY_PHRASES = [
    {
        phrase: '你好',
        pronunciation: 'nǐ hǎo',
        meaning: 'Hello.',
        audio: null,
        vocab: [
            {
                phrase: '你好嗎?',
                pronunciation: 'nǐ hǎo mā',
                meaning: 'How are you? 嗎(mā) is a question marker, like "ka" in Japanese.',
            }
        ]
    }, {
        phrase: '我很好，你呢？',
        pronunciation: 'wǒ hěn hǎo, nǐ nē',
        meaning: 'I\'m very well. And you?',
        audio: 'imverywellandyou',
    }, {
        phrase: '再見',
        pronunciation: 'zài jiàn',
        meaning: 'Bye (lit: see you again/later).',
        audio: null,
    }, {
        phrase: '謝謝',
        pronunciation: 'xiè xiè',
        meaning: 'Thank you.',
        audio: null,
    }, {
        phrase: '不客氣',
        pronunciation: 'bú kè qì',
        meaning: 'You\'re welcome. lit: no politeness (necessary)',
        audio: null,
    },
];

export const HUNGRY_PHRASES = [
    {
        phrase: '包子還是餃子?',
        pronunciation: 'bāo zi hái shì jiǎo zi',
        meaning: 'Buns or dumplings?',
        audio: null,
        vocab: [
            {
                phrase: '_ 還是 _',
                pronunciation: '_ hái shì _',
                meaning: '_ or _',
            }, {
                phrase: '包子',
                pronunciation: 'bāo zi',
                meaning: 'bun, like a pork bun or red bean bun',
            }, {
                phrase: '餃子',
                pronunciation: 'jiǎo zi',
                meaning: 'dumpling. It may be steamed, boiled, pan-fried, etc.',
            }, {
                phrase: '水餃',
                pronunciation: 'shuí jiǎo',
                meaning: 'dumpling, specifically one boiled in water. (水 means water)',
            },
        ],
    }, {
        phrase:'吃飯',
        pronunciation: 'chī fàn',
        meaning: '(to) eat a meal',
        audio: null,
        vocab: [
            {
                phrase: '飯',
                pronunciation: 'fàn',
                meaning: 'a meal, rice ',
            },
        ],
    }, {
        phrase:'早餐',
        pronunciation: 'cān',
        meaning: 'meal',
        audio: null,
        extra: 'You can add 早(zǎo, early), 中(zhōng, middle/center) or 晚(wǎn, late) before 餐 to say "breakfast", "lunch", and "dinner," respectively.',
    }, {
        phrase:'麵',
        pronunciation: 'miàn',
        meaning: 'noodles',
        audio: null,
        vocab: [
            {
                phrase: '涼麵', 
                pronunciation: 'liáng miàn',
                meaning: 'cold noodles',
            }, {
                phrase: '乾麵', 
                pronunciation: 'gān miàn',
                meaning: 'dry noodles',
            }, {
                phrase: '蛋麵', 
                pronunciation: 'dàn miàn',
                meaning: 'egg noodles',
            },
        ],
    }, {
        phrase:'飯',
        pronunciation: 'fàn',
        meaning: 'rice',
        audio: null,
    }, {
        phrase:'牛肉 ',
        pronunciation: 'niú ròu',
        meaning: 'beef (lit: cow meat)',
        audio: null,
    }, {
        phrase:'羊肉 ',
        pronunciation: 'yáng ròu',
        meaning: 'lamb (lit: sheep meat)',
        audio: null,
    }, {
        phrase:'雞肉 ',
        pronunciation: 'jī ròu',
        meaning: 'chicken (lit: chicken meat)',
        audio: null,
    }, {
        phrase:'魚肉 ',
        pronunciation: 'yú ròu',
        meaning: 'fish (lit: fish meat)',
        audio: null,
    }, {
        phrase:'餅乾',
        pronunciation: 'bǐng gān',
        meaning: 'cookie/cracker',
        audio: null,
    }, {
        phrase:'辣',
        pronunciation: 'là',
        meaning: 'spicy',
        audio: null,
    }, {
        phrase:'甜',
        pronunciation: 'tián',
        meaning: 'sweet',
        audio: null,
    }, {
        phrase:'甜點',
        pronunciation: 'tián diǎn',
        meaning: 'dessert/sweets',
        audio: null,
    },
];

export const TIRED_PHRASES = [
    {
        phrase: '我好累',
        pronunciation: 'wǒ hǎo lèi',
        meaning: 'I\'m so tired',
        audio: null,
    }, {
        phrase: '我想睡覺',
        pronunciation: 'wǒ xiǎng shuì jiào',
        meaning: 'I want to sleep.',
        audio: null,
        extra: 'If you add 午 (wǔ), meaning noon, you can say "I want a nap": wǒ xiǎng shuì wǔ jiào.',
    }, {
        phrase: '我不想刷牙',
        pronunciation: 'wǒ bù xiǎng shuā yá',
        meaning: 'I don\'t want to brush my teeth',
        audio: null,
    }, {
        phrase: '沒力氣了',
        pronunciation: 'méi lì qì le',
        meaning: 'No more energy.',
        audio: null,
        // extra: '力氣 means strength, e.g. 力氣'
    }, {
        phrase: '我一直打呵欠',
        pronunciation: 'wǒ yì zhí dǎ hē qiàn',
        meaning: 'I keep yawning',
        audio: null,
        extra: 'Yawn can also be "哈欠" (hā qiàn). "哈" is also the character for "ha" as in "hahaha".',
    }, {
        phrase: '我需要咖啡!',
        pronunciation: 'wǒ xū yào kā fē',
        meaning: 'I need coffee!',
        audio: null,
        vocab: [
            {
                phrase: '美式咖啡',
                pronunciation: 'měi shì kā fē',
                meaning: 'Americano, lit: American-style coffee',
            }, {
                phrase: '一杯 _',
                pronunciation: 'yì bēi _',
                meaning: 'One cup of _',
            },
        ],
    },
];

export const GRUMPY_PHRASES = [
    {
        phrase: '別打擾我',
        pronunciation: 'bié dǎ rǎo wǒ',
        meaning: 'Don\'t bother me.',
        audio: null,
    }, {
        phrase: '走開',
        pronunciation: 'zǒu kāi',
        meaning: 'Go away.',
        audio: null,
        vocab: [
            {
                phrase: '走',
                pronunciation: 'zǒu',
                meaning: 'to walk. 走吧',
            },{
                phrase: '開',
                pronunciation: 'zǒu',
                meaning: 'open (adj or v), e.g. 開門, to open a door. It can also mean "away" in some senses.',
            },        
        ],
    }, {
        phrase: '我不要',
        pronunciation: 'wǒ bú yào',
        meaning: 'I don\'t want (sth/to do sth)',
        audio: null,
    }, {
        phrase: '好煩啊',
        pronunciation: 'hǎo fán nà',
        meaning: 'So annoying',
        audio: null,
    }, {

    }
];

export const HOMESICK_PHRASES = [
    {
        phrase: '我有一點想家',
        pronunciation: 'wǒ yǒu yì diǎn xiǎng jiā',
        meaning: 'I\'m a little homesick',
        audio: null,
        vocab: [
            {
                phrase: '一點',
                pronunciation: 'yì diǎn',
                meaning: 'a bit, a little. The same characters also happen to mean one o\'clock.',
            }, {
                phrase: '家',
                pronunciation: 'jiā',
                meaning: 'house, home, family',
            }, {
                phrase: '想', 
                pronunciation: 'xiǎng', 
                meaning: 'to think, think of, miss, want. 想念(xiǎng niàn) is more specifically to miss (sth/sb)',
            },
        ],
    }, {
        phrase: '我找不到我的貓',
        pronunciation: 'wǒ zhǎo bú dào wǒ de māo',
        meaning: 'I can\'t find my cat',
        audio: null,
    }, {
        phrase: '嘟嘟',
        pronunciation: 'dū dū',
        meaning: 'Beep',
        audio: null,
    }, {
        phrase: '舊金山附近',
        pronunciation: 'jiù jīn shān fù jìn',
        meaning: 'Near San Francisco',
        audio: null,
        vocab: [
            {
                phrase: '舊金山',
                pronunciation: 'jiù jīn shān',
                meaning: 'San Francisco lit: old gold mountain. So named for the gold rush that drew many in hopes of a better life and fortune.',
            }, {
                phrase: '附近',
                pronunciation: 'fù jìn',
                meaning: 'Near. 附近的_(fù jìn de_) means "nearby _", as in "nearby schools"',
            },
        ],
    },
];