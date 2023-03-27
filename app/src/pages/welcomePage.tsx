import { Link } from 'react-router-dom'

import styles from '../styles/welcome.module.css'

import arrow from '../assets/arrow.svg'
import Circle from "../assets/background/background-circle-1.svg";

export default function WelcomePage() {
    return <main className={styles.welcome_main}>
        <img className={styles.firstCircle} src={Circle} alt=""/>
        <img className={styles.secondCircle} src={Circle} alt=""/>
        <img className={styles.thirdCircle} src={Circle} alt=""/>
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Welcome to <span>Farora</span> cinema service</h1>
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