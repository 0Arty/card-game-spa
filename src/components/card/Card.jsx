import React from 'react'
import { useActionCreators } from '../../hooks/useActionCreator';
import { cardDeckActions } from '../../redux/cardDeckSlice';
import styles from './Card.module.scss';



const Card = ({ item }) => {

    const cardDeckStore = useActionCreators(cardDeckActions)
    const { name, level, damage, hitPoint, rank, image, stars } = { ...item }
   
    let styleCard = { border: '5px ridge #c2c2c299' }

    if (rank === 2) { styleCard = { border: '5px ridge #30d46799' } }
    else if (rank === 3) { styleCard = { border: '5px ridge #0c44be99' } }
    else if (rank === 4) { styleCard = { border: '5px ridge #e0181899' } }
    else if (rank === 5) { styleCard = { border: '5px ridge #f7e70899' } }

    const dblClickHandler = (e) => {
        cardDeckStore.setPopUpInfo(item)
    }
    
    return (
            <div className={styles.cardBox} onDoubleClick={dblClickHandler} >

                
                <div className={styles.border} style={styleCard}>
                    <div className={styles.cardFont} style={{ backgroundImage: 'url(' + image + ')' }}>

                        <div className={styles.stats}>
                            <span>{name}</span>
                            <span>{stars}</span>
                            <span>level: {level}</span>
                            <span>AT: {damage}</span>
                            <span>HP: {hitPoint}</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Card;
