import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Tab.module.scss';


const Tab = ({ title, link }) => {

    return (
        <div className={styles.box}>

                <Link to={link} className={styles.link}>
                    <span>{title}</span>
                </Link>

        </div>
    );
};

export default Tab;
