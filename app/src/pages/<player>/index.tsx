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

import film from '../../../../volumes/film/bunny.mp4'

const Player = (props : any) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [IsFullscreen, setIsFullscreen] = useState(false);
    const [IsSubtitles, setIsSubtitles] = localStorage.getItem("disability") == "deafness" ?
        useState(true) : useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [videoTime, setVideoTime] = useState(0);
    const [progress, setProgress] = useState(0);

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

    const forward = () => {
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
                <div className={styles.videoContainer}>
                    <video
                        id="video1"
                        ref={videoRef}
                        className={styles.video}
                        src={film}
                    ></video>
                    <div className={styles.timeControls}>
                        <div className={styles.barWrapper}>
                            <div className={styles.progressContainer}>
                                <div className={styles.progressBarContainer}>
                                    <div style={{ width: `${progress}%` }} className={styles.time_progressBar}/>
                                </div>
                            </div>
                            <div className={styles.time}>
                                <p className={styles.controlsTime}>
                                    {Math.floor(currentTime / 60) +
                                        ":" +
                                        ("0" + Math.floor(currentTime % 60)).slice(-2)
                                    }
                                </p>
                            </div>
                        </div>
                        <div className={styles.controlsWrapper}>
                            <div className={styles.leftControls}>
                                {playing ? <div onClick={() => videoHandler("pause")} className={styles.button}>
                                        <img
                                            alt={''}
                                            src={pause}
                                        />
                                    </div>
                                    : <div onClick={() => videoHandler("play")} className={styles.button}>
                                        <img
                                            alt={''}
                                            src={play}
                                        />
                                    </div>
                                }
                                <div onClick={revert} className={styles.button}>
                                    <img
                                        alt={''}
                                        src={revertImg}
                                    />
                                </div>
                                <div onClick={forward} className={styles.button}>
                                    <img
                                        alt={''}
                                        src={forwardImg}
                                    />
                                </div>
                            </div>
                            <div className={styles.rightControls}>
                                { IsSubtitles ? <div className={styles.button} onClick={() => setIsSubtitles(!IsSubtitles)}>
                                    <img
                                        alt={''}
                                        src={subtitles}
                                    />
                                </div>
                                    : <div className={styles.button} onClick={() => setIsSubtitles(!IsSubtitles)}>
                                        <img
                                            alt={''}
                                            src={nonSubtitles}
                                        />
                                    </div>
                                }
                                <div className={styles.button}>
                                    <img
                                        alt={''}
                                        src={settings}
                                    />
                                </div>
                                <div className={styles.button}>
                                    <img
                                        alt={''}
                                        src={full}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
}

export default Player