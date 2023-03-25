import Checkbox from '../components/checkbox'
import styles from '../styles/registration.module.css'

export default function Registration() {
    return <main>
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Tell us about yourself</h1>
                <div className={styles.content}>
                    <div className={styles.form}>
                        <input className={styles.input} type="text" placeholder={"Username"}/>
                        <div className={styles.choose}>
                            <p className={styles.disability}>Do you have a disability?</p>
                            <Checkbox/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
}