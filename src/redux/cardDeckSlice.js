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
        currentBoardId : null,
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
                image: './img/lucifer.png',

            },
            {
                name: 'Wizard',
                level: 1,
                damage: 100,
                hitPoint: 250,
                rank: 3,
                stars: "\u2B50 \u2B50 \u2B50",
                image: './img/wizard.png',
            },
            {
                name: 'War Elephant',
                level: 1,
                damage: 75,
                hitPoint: 350,
                rank: 4,
                stars: "\u2B50 \u2B50 \u2B50 \u2B50",
                image: './img/WarElephant.png',
            },
            {
                name: 'Mio Miao',
                level: 1,
                damage: 170,
                hitPoint: 150,
                rank: 5,
                stars: "\u2B50 \u2B50 \u2B50 \u2B50 \u2B50",
                image: './img/mioMiao.png',
            },
        ],


    },
    popUpInfo: {
        isVisible: false,
        info: {

        }
    },
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
            const {id, stats} = action.payload
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
    }
})


export const cardDeckActions = {
    ...cardDeckSlice.actions
}
export default cardDeckSlice.reducer