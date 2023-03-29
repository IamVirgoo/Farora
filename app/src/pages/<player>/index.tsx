import { useRef, useState } from "react";

import styles from '../../styles/player.module.css'

import play from '../../assets/player/play.svg';
import pause from '../../assets/player/pause.svg';
import revertImg from '../../assets/player/revert.svg';
import forwardImg from '../../assets/player/forward.svg';
import settings from '../../assets/player/settings.svg';
import subtitles from '../../assets/player/subtitles.svg';
import nonSubtitles from '../../assets/player/non-subtitles.svg';
import full from '../../assets/player/full.svg';
import collapseFull from '../../assets/player/collapse-full.svg'

import film from '../../../../volumes/film/come-and-see-trailer.mp4'
import Header from "../../components/header";

import filmPreview from '../../assets/come-and-see-thumb.jpg'
import filmPoster from '../../assets/come-and-see-poster.jpg'

const Player = (props : any) => {
    return <main>
        <Header username={localStorage.getItem("username")}/>
        <section className={styles.hero}>
            <div className={styles.imageWrapper}/>
            <div className={styles.container}>
                <div className={styles.headingContent}>
                    <img className={styles.poster} src={filmPoster} alt=""/>
                    <div className={styles.movieInformation}>
                        <h1 className={styles.movieTitle}>Come and see</h1>
                        <p className={styles.movieDescription}>
                            The film's plot focuses on the Nazi German occupation of Belarus, a
                            nd the events as witnessed by a young Belarusian partisan teenager named Flyora,
                            who—against his mother's wishes—joins the Belarusian resistance movement,
                            and thereafter depicts the Nazi atrocities and human suffering inflicted upon the
                            Eastern European region's populace.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.video}>
            <div className={styles.container}>
                <div className={styles.videoContent}>
                    <h2 className={styles.videoHeading}>Let's Watch</h2>
                    <video src={film} controls></video>
                </div>
            </div>
        </section>
    </main>
}

export default Player