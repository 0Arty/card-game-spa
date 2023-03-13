import React, { useMemo } from 'react';
import styles from './DeckOfCard.module.scss';

import { useSelector } from 'react-redux';
import { cardDeckActions } from '../../redux/cardDeckSlice'
import { useActionCreators } from '../../hooks/useActionCreator'
import classNames from 'classnames';
import Card from '../card/Card';
import DeckStats from './deckStats/DeckStats';
import PopUp from '../popup/PopUp';

const DeckOfCard = () => {

    const decksIds = useSelector(state => state.cardDeckSlice.user.decksIds)
    const cardDeckStore = useActionCreators(cardDeckActions)
    const items = useSelector(state => state.cardDeckSlice.user.cards)

    const currentItemId = useSelector(state => state.cardDeckSlice.user.currentItemId)
    const currentBoardId = useSelector(state => state.cardDeckSlice.user.currentBoardId)

    const dragOverHandler = (e) => e.preventDefault()

    const dragLeaveHandler = (e) => { }


    const dragEndHandler = (e) => {

    }
    const dragStartHandler = (e, id, boardId) => {

        cardDeckStore.setCurrentBoardId(boardId)
        cardDeckStore.setCurrentItemId(id)

    }
    const dropHandler = (e, id, boardId) => {
        e.preventDefault()
        const newIds = [...decksIds[boardId]]
        newIds.splice(newIds.indexOf(id), 1)
        newIds.splice(newIds.indexOf(id) + 1, 0, id)
        cardDeckStore.setBoardIds(newIds)

    }

    function dropCardHandler(e, boardId) {
        if (boardId !== currentBoardId) {
            const newIds1 = [...decksIds[boardId]]
            const newIds2 = [...decksIds[currentBoardId]]

            if (newIds1.length < 4 || boardId === 3) {
                newIds1.push(currentItemId)
                newIds2.splice(newIds2.indexOf(currentItemId), 1)
                cardDeckStore.setBoardsIds({ newIds1, boardId, newIds2, currentBoardId, })
            }
        }

        // console.log('boardId :', boardId)
    }


    return (
        <div className={styles.box}>
        
            <PopUp />
            <div className={classNames(styles.board, styles.board1)}
                onDragOver={(e) => { dragOverHandler(e) }}
                onDrop={e => dropCardHandler(e, 0)}
            >
                <span className={styles.span}>Колода №1</span>
                <div className={styles.cardItem}>
                    {decksIds[0].map(id =>
                        <div className={styles.card} draggable={true}
                            onDragStart={(e) => dragStartHandler(e, id, 0)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDragOver={e => dragOverHandler(e)}
                            onDrop={e => dropHandler(e, id, 0)}
                        >

                            {items[id] ? <Card item={items[id]} /> : null}
                        </div>
                    )}
                </div>
                <DeckStats id={decksIds[0]} items = {items} boardID={0}/>
            </div>


            <div className={classNames(styles.board, styles.board2)}
                onDragOver={(e) => { dragOverHandler(e) }}
                onDrop={e => dropCardHandler(e, 1)}
            >
                <span className={styles.span}>Колода №2</span>
                <div className={styles.cardItem}>
                    {decksIds[1].map(id =>
                        <div className={styles.card} draggable={true}
                            onDragStart={(e) => dragStartHandler(e, id, 1)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDragOver={e => dragOverHandler(e)}
                            onDrop={e => dropHandler(e, id, 1)}
                        >
                            {items[id] ? <Card item={items[id]} /> : null}
                        </div>
                    )}
                </div>
                <DeckStats id={decksIds[1]} items = {items} boardID={1}/>
            </div>

            <div className={classNames(styles.board, styles.board3)}
                onDragOver={(e) => { dragOverHandler(e) }}
                onDrop={e => dropCardHandler(e, 2)}
            >
                <span className={styles.span}>Колода №3</span>
                <div className={styles.cardItem}>
                    {decksIds[2].map(id =>
                        <div className={styles.card} draggable={true}
                            onDragStart={(e) => dragStartHandler(e, id, 2)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDragOver={e => dragOverHandler(e)}
                            onDrop={e => dropHandler(e, id, 2)}
                        >
                            {items[id] ? <Card item={items[id]} /> : null}
                        </div>

                    )}
                </div>
                <DeckStats id={decksIds[2]} items = {items} boardID={2}/>
            </div>

            <div className={styles.inventoryBoard}
                onDragOver={(e) => { dragOverHandler(e) }}
                onDrop={e => dropCardHandler(e, 3)}
            >
                <span className={styles.span}>Карти в Інвентарі</span>
                <div className={styles.inventoryCards}>
                    {decksIds[3].map(id =>
                        <div className={styles.card} draggable={true}
                            onDragStart={(e) => dragStartHandler(e, id, 3)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDragOver={e => dragOverHandler(e)}
                            onDrop={e => dropHandler(e, id, 3)}
                        >
                            {items[id] ? <Card item={items[id]} /> : null}
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default DeckOfCard;
