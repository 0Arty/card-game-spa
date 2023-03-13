import React from 'react'
import Tab from './Tab/Tab';
import styles from './Tabs.module.scss';


const  Tabs = ({}) => {

    return (
        <div className={styles.box}>
            <Tab title={'Діаманти'} link={'/shop/diamonds'}/>
            <Tab title={'Смарагди'} link={'/shop/emeralds'}/>
            <Tab title={'Темні душі'} link={'/shop/souls'}/>
        </div>
    );
};

export default Tabs;
