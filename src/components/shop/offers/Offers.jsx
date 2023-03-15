import React from 'react'
import styles from './Offers.module.scss';
import { Routes, Route } from 'react-router-dom'
import DiamondOffer from './DiamondOffer';
import EmeraldOffers from './EmeraldOffers';
import SoulsOffers from './SoulsOffers';

const Offers = ({ }) => {

    return (

        <div className={styles.box}>
            <Routes>
                <Route path="/" element={<DiamondOffer />} />
                <Route path="/diamonds" element={<DiamondOffer />} />
                <Route path="/emeralds" element={<EmeraldOffers />} />
                <Route path="/souls" element={<SoulsOffers />} />

            </Routes>
        </div>
    );
};

export default Offers;
