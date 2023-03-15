import React from 'react'
import Card from '../../../card/Card';
import styles from './OfferCard.module.scss';
import { cardDeckActions } from '../../../../redux/cardDeckSlice';
import { useActionCreators } from '../../../../hooks/useActionCreator'


const  OfferCard = ({cardInfo, price, resourseIndex, offerIndex}) => {

    const cardDeckStore = useActionCreators(cardDeckActions)

    const buyHandler = () =>{
        console.log('offerIndex', offerIndex)
        cardDeckStore.buyOffer({resourseIndex, offerIndex})
    }

    return (
        <div className={styles.box}>
            <div className={styles.content}>
                <Card item={cardInfo}/>
            </div>
            <div className={styles.buy}>
                <span className={styles.price}> Ціна: {price}</span>
                <button className={styles.btn} onClick = {buyHandler}> Купити</button>
            </div>
        </div>
    );
};

export default OfferCard;
