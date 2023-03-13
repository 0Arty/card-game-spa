import React from 'react'
import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom'

import Menu from './menu/Menu';
import Inventory from './inventory/Inventory';
import DeckOfCard from './deck-of-card/DeckOfCard';
import Shop from './shop/Shop'

const App = ({ }) => {

    return (
        <div className={styles.box}>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/player-inventory/*" element={<Inventory />} />
                <Route path="/deck-of-cards/*" element={<DeckOfCard />} />
                <Route path="/shop/*" element={<Shop />} />
            </Routes>


        </div>
    );
};

export default App;
