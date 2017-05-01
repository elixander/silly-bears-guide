
export const CATEGORIES = {
    FRIENDLY: 'FRIENDLY',
    HUNGRY: 'HUNGRY',
    TIRED: 'TIRED',
    GRUMPY: 'GRUMPY',
    HOMESICK: 'HOMESICK',
}


export const CATEGORY_INFO = {
    [CATEGORIES.FRIENDLY]: {
        name: 'Friendly bear',
    },
    [CATEGORIES.HUNGRY]: {
        name: 'Hungry bear',
    },
    [CATEGORIES.TIRED]: {
        name: 'Tired bear',
    },
    [CATEGORIES.GRUMPY]: {
        name: 'Grumpy bear',
    },
    [CATEGORIES.HOMESICK]: {
        name: 'Homesick bear',
    },
}

const FRIENDLY_TERMS = [
    {
        term: '你好',
        pronunciation: 'nǐ hǎo',
        meaning: 'Hello',
        audio: null,
    }
];

export const TERMS = {
    [CATEGORIES.FRIENDLY]: FRIENDLY_TERMS,
    [CATEGORIES.HUNGRY]: [],
    [CATEGORIES.TIRED]: [],
    [CATEGORIES.GRUMPY]: [],
    [CATEGORIES.HOMESICK]: [],
}