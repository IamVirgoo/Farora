import styles from '../styles/header.module.css';

export default function Header(props : any) {
    return <header>
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Farora</h1>
                <div className={styles.user}>
                    <p className={styles.username}>{props.username || "Username"}</p>
                </div>
            </div>
            <div className={styles.line}/>
        </div>
    </header>
}