import { useRef, useState } from "react";

import styles from '../../styles/player.module.css'

import play from '../../assets/player/play.svg';
import pause from '../../assets/player/pause.svg';
import revertImg from '../../assets/player/revert.svg';
import forward from '../../assets/player/forward.svg';
import settings from '../../assets/player/settings.svg';
import subtitles from '../../assets/player/subtitles.svg';
import full from '../../assets/player/full.svg';

import film from '../../../../volumes/film/bunny.mp4'
import {Simulate} from "react-dom/test-utils";
import keyDown = Simulate.keyDown;

const Player = (props : any) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [videoTime, setVideoTime] = useState(0);
    const [progress, setProgress] = useState(10);

    const videoHandler = (control: string) => {
        if (control === "play") {
            // @ts-ignore
            videoRef.current.play();
            setPlaying(true);
            let vid = document.getElementById("video1");
            // @ts-ignore
            setVideoTime(vid.duration);
        } else if (control === "pause") {
            // @ts-ignore
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    const fastForward = () => {
        // @ts-ignore
        videoRef.current.currentTime += 10;
    };

    const revert = () => {
        // @ts-ignore
        videoRef.current.currentTime -= 10;
    };

    window.setInterval(function () {
        // @ts-ignore
        setCurrentTime(videoRef.current?.currentTime);
        // @ts-ignore
        setProgress((videoRef.current?.currentTime / videoTime) * 100);
    }, 1000);

    return <main>
        <section className={styles.player}>
            <div className={styles.container}>
                <h1 className={styles.title}>{props.movieTitle || "Movie Title"}</h1>
                <p className={styles.description}>{props.movieDescription || "movie description movie description"}</p>
                <div className={styles.videoContainer}>
                    <video
                        id="video1"
                        ref={videoRef}
                        className={styles.video}
                        src={film}
                    ></video>
                    <div className={styles.timeControls}>
                        <div className={styles.time_progressbarContainer}>
                            <div
                                style={{ width: `${progress}%` }}
                                className={styles.time_progressBar}
                            ></div>
                            <p className={styles.controlsTime}>
                                {Math.floor(currentTime / 60) +
                                    ":" +
                                    ("0" + Math.floor(currentTime % 60)).slice(-2)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    /*<div className={styles.app}>
            <video
                id="video1"
                ref={videoRef}
                className="video"
                src={film}
            ></video>

            <div className={styles.controlsContainer}>
                <div className={styles.controls}>
                    <img
                        onClick={revert}
                        className={styles.controlsIcon}
                        alt=""
                        src={revertImg}
                    />
                    {playing ? (
                        <img
                            onClick={() => videoHandler("pause")}
                            className={styles.controlsIconSmall}
                            alt=""
                            src={pause}
                        />
                    ) : (
                        <img
                            onClick={() => videoHandler("play")}
                            className={styles.controlsIconSmall}
                            alt=""
                            src={play}
                        />
                    )}
                    <img
                        className={styles.controlsIcon}
                        onClick={fastForward}
                        alt=""
                        src={forward}
                    />
                </div>
            </div>

            <div className={styles.timeControls}>
                <p className={styles.controlsTime}>
                    {Math.floor(currentTime / 60) +
                        ":" +
                        ("0" + Math.floor(currentTime % 60)).slice(-2)}
                </p>
                <div className={styles.time_progressbarContainer}>
                    <div
                        style={{ width: `${progress}%` }}
                        className={styles.time_progressBar}
                    ></div>
                </div>
                <p className={styles.controlsTime}>
                    {Math.floor(videoTime / 60) +
                        ":" +
                        ("0" + Math.floor(videoTime % 60)).slice(-2)}
                </p>
            </div>
        </div>*/
}

export default Player