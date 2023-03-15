import React from 'react'
import styles from './Menu.module.scss';
import video from '../../videos/forest.mp4'

import Routing from './routing/Routing';
import User from './user/User';
import { useSelector } from 'react-redux';
import Resours from '../shop/resourses/resourse/Resours';


const Menu = ({ }) => {
    const resourses = useSelector(state => state.cardDeckSlice.user.resourses)

    return (
        <div className={styles.box}>
            <video loop autoPlay muted className={styles.video} >
                <source src={video} type='video/mp4' />
            </video>
            <div className={styles.wrapper} >
                <User />
                <Routing />
            </div>
            <div className={styles.resourses}>
                {

                    
                    resourses.map( (resourse, index) => <Resours count ={resourse.count} name={resourse.name} key={index}/> )
                }
            </div>
        </div >
    );
};

export default Menu;
