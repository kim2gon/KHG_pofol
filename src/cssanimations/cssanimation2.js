import React from 'react';
import styles from '../styles/animation2.module.css';

const Cssanimation2 = () => {
    return (
        <div className={`${styles.container} ${styles.pokecon}`}>
            <div className={styles['circle-container']}>
                <div className={styles['background-grass']}>
                    {[...Array(14)].map((_, i) => (
                        <div key={i} className={styles['background-blade']}></div>
                    ))}
                </div>
                <div className={styles['middle-grass']}>
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className={styles['middle-blade']}></div>
                    ))}
                </div>
                <div className={styles['foreground-grass']}>
                    {[...Array(18)].map((_, i) => (
                        <div key={i} className={styles['foreground-blade']}></div>
                    ))}
                </div>
                <div className={`${styles.center} ${styles.pokeball} ${styles.animate}`}>
                    <div className={styles['pokeball-button']}></div>
                    <div className={styles['pokeball-ring']}></div>
                    <div className={styles['pokeball-shine']}></div>
                    <div className={styles['pokeball-shine-small']}></div>
                </div>
                <div className={styles.stars1}></div>
                <div className={styles.stars2}></div>
                <div className={styles.stars3}></div>
                <div className={styles['shooting-stars']}></div>
            </div>
        </div>
    );
};

export default Cssanimation2;