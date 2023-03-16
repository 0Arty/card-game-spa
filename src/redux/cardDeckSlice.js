import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        isAuth: true,
        name: 'Arteon',
        lvl: 10,
        currentBoardId: null,
        currentItemId: null,
        decksIds: [
            [],
            [],
            [],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29
            ]

        ],
        currentBoardId: null,
        currentItemId: null,
        stats: [
            {
                totalHP: 0,
                totalAttack: 0,
                totalPowerRank: 0,
            },
            {
                totalHP: 0,
                totalAttack: 0,
                totalPowerRank: 0,
            },
            {
                totalHP: 0,
                totalAttack: 0,
                totalPowerRank: 0,
            },
        ],
        cards: [
            {
                name: 'Lucifer',
                level: 1,
                damage: 120,
                hitPoint: 250,
                rank: 2,
                stars: "\u2B50 \u2B50",
                image: '/img/lucifer.png',

            },
            {
                name: 'Wizard',
                level: 1,
                damage: 100,
                hitPoint: 250,
                rank: 3,
                stars: "\u2B50 \u2B50 \u2B50",
                image: '/img/wizard.png',
            },
            {
                name: 'War Elephant',
                level: 1,
                damage: 75,
                hitPoint: 350,
                rank: 4,
                stars: "\u2B50 \u2B50 \u2B50 \u2B50",
                image: '/img/WarElephant.png',
            },
            {
                name: 'Mio Miao',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 5,
                stars: "\u2B50 \u2B50 \u2B50 \u2B50 \u2B50",
                image: '/img/mioMiao.png',
            },
            {
                name: 'Arfet',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/Arfet.png',
            },
            {
                name: 'Artificer',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/Artificer.png',
            },
            {
                name: 'Fighter',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/Fighter.png',
            },
            {
                name: 'Firetare',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/Firetare.png',
            },
            {
                name: 'Gate of tranquility',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/gate-of-tranquility.png',
            },
            {
                name: 'God of Deth',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/god-of-deth.png',
            },
            {
                name: 'LTC-78',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/LTC-78.png',
            },
            {
                name: 'Markus Bitner',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/markus-bitner.png',
            },
            {
                name: 'Moon',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/Moon.png',
            },
            {
                name: 'Inquisitor ',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/Paladin-01.png',
            },
            {
                name: 'Supreme Paladin ',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/Paladin-02.png',
            },
            {
                name: 'Paradoxica',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/paradoxica.png',
            },
            {
                name: 'PSX-94',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/PSX-94.png',
            },
            {
                name: 'QWE-45',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/QWE-45.png',
            },
            {
                name: 'Ranger',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/Ranger.png',
            },
            {
                name: 'Sandu',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/sandu.png',
            },
            {
                name: 'Sfiro',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/sfiro.png',
            },
            {
                name: 'Sinky',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/Sinky.png',
            },
            {
                name: 'Snow Gigant',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/snow-gigant.png',
            },
            {
                name: 'Sorcerer',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/Sorcerer.png',
            },
            {
                name: 'T1-G3r',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/T1-g3r.png',
            },
            {
                name: 'The light of the eternity',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/the-light-of-eternity.png',
            },
            {
                name: 'Thief Assasin',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/thief-assasin.png',
            },
            {
                name: 'World Watcher',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/world-watcher.png',
            },
            {
                name: 'World Wyvern',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/world-wyvern.png',
            },
            {
                name: 'Zibob',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 1,
                stars: "\u2B50",
                image: '/img/Zibob.png',
            },
        ],
        cardIndex: 30,
        resourses: [
            {
                count: 300,
                name: 'Діaманти',
            },
            {
                count: 14,
                name: 'Смарагди',
            },
            {
                count: 20,
                name: 'Темні душі',
            },

        ],


    },
    popUpInfo: {
        isVisible: false,
        info: {

        }
    },
    offers: {
        diamonds: [
            {
                price: 100,
                card: {
                    name: 'Borfey',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/Borfey.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Cosmo 1',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/cosmo1.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Cosmo 2',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/cosmo2.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Cosmo 3',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/cosmo3.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Cosmo 4',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/cosmo4.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Disturbed',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/Disturbed.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Druid',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/Druid.png',

                }
            },
        ],
        emeralds: [
            {
                price: 7,
                card: {
                    name: 'Axiel',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/Axiel.png',
                },
            },
            {
                price: 12,
                card: {
                    name: 'Azazel',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/Azazel.png',
                },
            },
            {
                price: 12,
                card: {
                    name: 'Balderon',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/balderon.png',
                },
            },
            {
                price: 12,
                card: {
                    name: 'Barbarian',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/Barbarian.png',
                },
            },
            {
                price: 12,
                card: {
                    name: 'Bard',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/Bard.png',
                },
            },
            {
                price: 12,
                card: {
                    name: 'Bloodbor',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/Bloodbor.png',
                },
            },
        ],
        souls: [
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant Zero',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant1.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 1',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant2.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 2',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant3.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 3',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant4.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 4',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant5.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 5',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant6.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 6',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant7.png',
                },

            },
        ],

    }
}

export const cardDeckSlice = createSlice({
    name: 'cardDeckSlice',
    initialState,
    reducers: {
        setCurrentItemId: (state, actions) => {
            state.user.currentItemId = actions.payload
        },
        setCurrentBoardId: (state, action) => {
            state.user.currentBoardId = action.payload
        },
        setBoardIds: (state, action) => {
            state.user.decksIds[state.user.currentBoardId] = action.payload
        },
        setBoardsIds: (state, action) => {
            state.user.decksIds[action.payload.boardId] = action.payload.newIds1
            state.user.decksIds[action.payload.currentBoardId] = action.payload.newIds2
        },
        setUserBoardStats: (state, action) => {
            const { id, stats } = action.payload
            state.user.stats[id] = stats
        },
        setPopUpInfo: (state, action) => {
            console.log('loh');
            state.popUpInfo.isVisible = false
            state.popUpInfo.info = action.payload
            state.popUpInfo.isVisible = true
        },
        closePopUp: (state) => {
            state.popUpInfo.isVisible = false
        },
        buyOffer: (state, action) => {
            const { resourseIndex, offerIndex } = action.payload
            console.log(resourseIndex)
            if (resourseIndex === 0) {
                const userCurency = state.user.resourses[resourseIndex].count
                const price = state.offers.diamonds[offerIndex].price
                if (userCurency >= price) {
                    state.user.resourses[resourseIndex].count = state.user.resourses[0].count - state.offers.diamonds[offerIndex].price
                    state.user.decksIds[3].push(state.user.cardIndex)
                    state.user.cardIndex++

                    const cardOffer = state.offers.diamonds[offerIndex].card
                    state.user.cards.push(cardOffer)
                    state.offers.diamonds.splice(offerIndex, offerIndex + 1)
                }


            } else if (resourseIndex === 1) {
                const userCurency = state.user.resourses[resourseIndex].count
                const price = state.offers.emeralds[offerIndex].price
                if (userCurency >= price) {
                    state.user.resourses[resourseIndex].count = state.user.resourses[1].count - state.offers.emeralds[offerIndex].price
                    state.user.decksIds[3].push(state.user.cardIndex)
                    state.user.cardIndex++

                    const cardOffer = state.offers.emeralds[offerIndex].card
                    state.user.cards.push(cardOffer)

                    state.offers.emeralds.splice(offerIndex, offerIndex + 1)
                }


            } else if (resourseIndex === 2) {
                const userCurency = state.user.resourses[resourseIndex].count
                const price = state.offers.souls[offerIndex].price
                if (userCurency >= price) {
                    state.user.resourses[resourseIndex].count = state.user.resourses[2].count - state.offers.souls[offerIndex].price
                    state.user.decksIds[3].push(state.user.cardIndex)
                    state.user.cardIndex++

                    const cardOffer = state.offers.souls[offerIndex].card
                    state.user.cards.push(cardOffer)

                    state.offers.souls.splice(offerIndex, offerIndex + 1)
                }
            }
        },
    }
})


export const cardDeckActions = {
    ...cardDeckSlice.actions
}
export default cardDeckSlice.reducer