import React from 'react'
import styles from './Offers.module.scss';
import { Routes, Route } from 'react-router-dom'
import DiamondOffer from './diamondsOffer/DiamondOffer';

const Offers = ({ }) => {

    return (

        <div className={styles.box}>
            <Routes>
                <Route path="/" element={<div  />} />
                <Route path="/diamonds" element={<DiamondOffer />} />

            </Routes>
        </div>
    );
};

export default Offers;
