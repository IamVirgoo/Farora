import { Link } from 'react-router-dom'

import styles from '../styles/welcome.module.css'

import arrow from '../assets/arrow.svg'

export default function WelcomePage() {
    return <main>
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <h1 className={styles.heroContainerHeading}>Welcome to <span>Farora</span> cinema service</h1>
                <div className={styles.content}>
                    <div className={styles.circles}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle} style={{left : 75}}></div>
                        <div className={styles.circle} style={{left : 150}}></div>
                        <div className={styles.circle} style={{left : 225}}></div>
                    </div>
                    <Link className={styles.button} to={'/registration'}>
                        <img src={arrow} alt=""/>
                    </Link>
                </div>
            </div>
        </section>
    </main>
}