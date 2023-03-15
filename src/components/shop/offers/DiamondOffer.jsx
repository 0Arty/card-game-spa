import React from 'react'
import styles from './Offers.module.scss';
import { useSelector } from 'react-redux';
import PopUp from '../../popup/PopUp';
import OfferCard from './offerCard/OfferCard';

const DiamondOffer = ({ }) => {


    const offers = useSelector(state => state.cardDeckSlice.offers.diamonds)

    return (
        <div className={styles.box1}>

            <PopUp />
            <div className={styles.offers}>

                {offers.map((offer, index) => {
                    return <OfferCard cardInfo={offer.card} price={offer.price} key={index} resourseIndex = {0} offerIndex={index}/>
                })}

            </div>
        </div>
    );
};

export default DiamondOffer;
