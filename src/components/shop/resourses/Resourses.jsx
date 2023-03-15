import React from 'react'
import Resours from './resourse/Resours';
import styles from './Resourses.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const  Resourses = ({}) => {

    const resourses = useSelector(state => state.cardDeckSlice.user.resourses)

    return (
        <div className={styles.box}>
                {
                    resourses.map( (resourse, index) => <Resours count ={resourse.count} name={resourse.name} key={index}/> )
                }
                <Link to='/' className={styles.link}>X</Link>

        </div>  
    );
};

export default Resourses;
