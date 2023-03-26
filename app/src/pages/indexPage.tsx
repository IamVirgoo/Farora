import { Link } from "react-router-dom";

import Header from "../components/header";

import styles from '../styles/index.module.css'
import Circle from "../assets/background/background-circle-1.svg";

export default function IndexPage() {
    if (localStorage.getItem("authenticated") == "true") return <main style={{overflowX: "hidden"}}>
        <img className={styles.firstCircle} src={Circle} alt=""/>
        <Header username={localStorage.getItem("username")}/>
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <h1 className={styles.title}>MovieMovieMovie</h1>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <Link className={styles.button} to={""}>
                        <p className={styles.buttonText}>Lets watch</p>
                    </Link>
                </div>
            </div>
        </section>
        <section className={styles.movies}>
            <div className={styles.container}>
                <h2 className={styles.title}>Movies</h2>
                <div className={styles.line}/>
                <div className={styles.moviesContent}>
                    <div className={styles.movie}>
                        <Link className={styles.movieButton} to={""}>
                            <p className={styles.movieButtonText}>Lets watch</p>
                        </Link>
                    </div>
                    <div className={styles.movie}>
                        <Link className={styles.movieButton} to={""}>
                            <p className={styles.movieButtonText}>Lets watch</p>
                        </Link>
                    </div>
                    <div className={styles.movie}>
                        <Link className={styles.movieButton} to={""}>
                            <p className={styles.movieButtonText}>Lets watch</p>
                        </Link>
                    </div>
                    <div className={styles.movie}>
                        <Link className={styles.movieButton} to={""}>
                            <p className={styles.movieButtonText}>Lets watch</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </main>
    else return <>
        {window.location.href='/welcome'}
    </>
}