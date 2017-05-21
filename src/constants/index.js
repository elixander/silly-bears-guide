import {
    FRIENDLY_PHRASES, 
    HUNGRY_PHRASES,
    TIRED_PHRASES,
    GRUMPY_PHRASES,
    HOMESICK_PHRASES,
} from './phrases';

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

export const PHRASES = {
    [CATEGORIES.FRIENDLY]: FRIENDLY_PHRASES,
    [CATEGORIES.HUNGRY]: HUNGRY_PHRASES,
    [CATEGORIES.TIRED]: TIRED_PHRASES,
    [CATEGORIES.GRUMPY]: GRUMPY_PHRASES,
    [CATEGORIES.HOMESICK]: HOMESICK_PHRASES,
}