import React from 'react'
import { useActionCreators } from '../../hooks/useActionCreator';
import { cardDeckActions } from '../../redux/cardDeckSlice';
import styles from './Card.module.scss';



const Card = ({ item }) => {

    const cardDeckStore = useActionCreators(cardDeckActions)
    const { name, level, damage, hitPoint, rank, image, stars, id } = { ...item }
    let styleCard = { border: '5px ridge #c2c2c299' }

    if (rank === 2) { styleCard = { border: '5px ridge #30d46799' } }
    else if (rank === 3) { styleCard = { border: '5px ridge #0c44be99' } }
    else if (rank === 4) { styleCard = { border: '5px ridge #e0181899' } }
    else if (rank === 5) { styleCard = { border: '5px ridge #f7e70899' } }

    const dblClickHandler = (e) => {
        cardDeckStore.setPopUpInfo(item)
    }

    return (
        <div className={styles.cardBox} onDoubleClick={dblClickHandler}  >


            <div className={styles.border} >
                <div className={styles.cardFont} style={{ backgroundImage: 'url(' + image + ')' }}>

                    <div className={styles.stats} >
                        <div className={styles.nameBox}> 
                            <span className={styles.name}>{name}</span>
                            <span>{stars}</span>
                        </div>
                        <div className={styles.characters}>
                            <span>Рівень: {level}</span>
                            <span>Aтака: {damage}</span>
                            <span>Життя: {hitPoint}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
