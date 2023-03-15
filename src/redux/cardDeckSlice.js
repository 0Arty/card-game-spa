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
            [0, 1, 2, 3]

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
        ],
        cardIndex: 4,
        resourses: [
            {
                count: 300,
                name: 'Діaманти',
            },
            {
                count: 300,
                name: 'Смарагди',
            },
            {
                count: 300,
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
                    name: 'Lucifer',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/lucifer.png',

                }
            }
        ],
        emeralds: [
            {
                price: 12,
                card: {
                    name: 'Wizard',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/wizard.png',
                },
            }
        ],
        souls: [
            {
                price: 5,
                card: {
                    name: 'Mio Miao',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 5,
                    stars: "\u2B50 \u2B50 \u2B50 \u2B50 \u2B50",
                    image: '/img/mioMiao.png',
                },
            }
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
             const {resourseIndex, offerIndex} = action.payload
             console.log(resourseIndex)
            if(resourseIndex===0){
                state.user.resourses[resourseIndex].count = state.user.resourses[0].count-state.offers.diamonds[offerIndex].price
                state.user.decksIds[3].push(state.user.cardIndex)
                state.user.cardIndex ++
        
                const cardOffer = state.offers.diamonds[offerIndex].card
                state.user.cards.push(cardOffer)
                state.offers.diamonds.splice(offerIndex, offerIndex+1)

            }else if(resourseIndex===1){
                state.user.resourses[resourseIndex].count = state.user.resourses[1].count-state.offers.emeralds[offerIndex].price
                state.user.decksIds[3].push(state.user.cardIndex)
                state.user.cardIndex ++

                const cardOffer = state.offers.emeralds[offerIndex].card
                state.user.cards.push(cardOffer)

                state.offers.emeralds.splice(offerIndex, offerIndex+1)

            }else if(resourseIndex===2){
                state.user.resourses[resourseIndex].count = state.user.resourses[2].count-state.offers.souls[offerIndex].price
                state.user.decksIds[3].push(state.user.cardIndex)
                state.user.cardIndex ++
                
                const cardOffer = state.offers.souls[offerIndex].card
                state.user.cards.push(cardOffer)
                
                state.offers.souls.splice(offerIndex, offerIndex+1)

            }
             
        },
    }
})


export const cardDeckActions = {
    ...cardDeckSlice.actions
}
export default cardDeckSlice.reducer