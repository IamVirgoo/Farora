import { useState } from "react";
import { Link } from "react-router-dom";
import { animated, config, useChain, useSpring, useSpringRef } from "react-spring";

import Checkbox from "../components/checkbox";

import styles from '../styles/registration.module.css'

import arrow from '../assets/choose-arrow .svg'
import longArrow from '../assets/arrow.svg'
import Circle from '../assets/background/background-circle-1.svg'

export default function Registration() {
    const [username, setUsername] = useState<string>("")

    const [IsCheck, setIsCheck] = useState(false);
    const [IsDeuteranopia, setIsDeuteranopia] = useState(false);
    const [IsTritanopia, setIsTritanopia] = useState(false);
    const [IsMonochromacy, setIsMonochromacy] = useState(false);
    const [IsDeafness, setIsDeafness] = useState(false);

    return <main className={styles.register_main}>
        <img className={styles.firstCircle} src={Circle} alt=""/>
        <img className={styles.secondCircle} src={Circle} alt=""/>
        <img className={styles.thirdCircle} src={Circle} alt=""/>
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Tell us about yourself</h1>
                <div className={styles.content}>
                    <div className={styles.form}>
                        <input className={styles.input} type="text" placeholder={"Username"}
                               onChange={(event) => setUsername(event.target.value)}/>
                        <div className={styles.choose}>
                            <p className={styles.disability}>Do you have a disability?</p>
                            <div onChange={() => setIsCheck(!IsCheck)}><Checkbox check={IsCheck}/></div>
                        </div>
                        <div className={styles.dropdown}>
                            <div className={styles.dropdownButton} style={IsCheck ? {visibility: "visible"} : {visibility: "hidden", display: "none"}}>
                                <p className={styles.dropdownButtonText}>Choose what suits you</p>
                                <img src={arrow} alt=""/>
                            </div>
                            <div className={styles.dropdownWrapper}/>
                            <div className={styles.dropdownContent}>
                                <div className={styles.dropdownPath}>
                                    <p className={styles.dropdownPathHeading}>Daltonism</p>
                                    <div className={styles.line}/>
                                    <div className={styles.dropdownPathContent}>
                                        <div className={styles.dropdownPathContentChoose}>
                                            <p className={styles.dropdownPathContentChooseText}>Deuteranopia</p>
                                            <div onChange={() => setIsDeuteranopia(!IsDeuteranopia)}><Checkbox check={IsDeuteranopia}/></div>
                                        </div>
                                        <div className={styles.dropdownPathContentChoose}>
                                            <p className={styles.dropdownPathContentChooseText}>Tritanopia</p>
                                            <div onChange={() => setIsTritanopia(!IsTritanopia)}><Checkbox check={IsTritanopia}/></div>
                                        </div>
                                        <div className={styles.dropdownPathContentChoose}>
                                            <p className={styles.dropdownPathContentChooseText}>Monochromacy</p>
                                            <div onChange={() => setIsMonochromacy(!IsMonochromacy)}><Checkbox check={IsMonochromacy}/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.dropdownPath}>
                                    <p className={styles.dropdownPathHeading}>Other</p>
                                    <div className={styles.line}/>
                                    <div className={styles.dropdownPathContent}>
                                        <div className={styles.dropdownPathContentChoose}>
                                            <p className={styles.dropdownPathContentChooseText}>Deafness</p>
                                            <div onChange={() => setIsDeafness(!IsDeafness)}><Checkbox check={IsDeafness}/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Link className={styles.button} to={'/'} onClick={() => {
            localStorage.setItem("authenticated", "true");
            localStorage.setItem("username", username);

            if (IsMonochromacy) localStorage.setItem("daltonism", "monochromacy")
            if (IsTritanopia) localStorage.setItem("daltonism", "tritanopia")
            if (IsDeuteranopia) localStorage.setItem("daltonism", "deuteranopia")
            if (IsDeafness) localStorage.setItem("disability", "deafness")
        }}>
            <img src={longArrow} alt=""/>
        </Link>
    </main>
}