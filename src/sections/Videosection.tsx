import ReactPlayer from 'react-player';
import styles from '../styles/sections/videosection.module.scss';

const Videosection = () => {
  return (
    <section className={styles.videosection}>
      <div className={styles.videosection__header}>
        <h1>Незабываемые моменты</h1>
      </div>
      <div className={styles.videosection__playerWrapper}>
        <ReactPlayer
          className={styles.videosection__player}
          playing={true}
          muted={true}
          width="60vw"
          height="auto"
          url="./assets/video/sozdaniepaceta.day2.mp4"
        />
        <div className={styles.videosection__figure}>
          <img src="./assets/figures/video-figure.svg" alt="Геометрическая фигура" />
        </div>
      </div>
    </section>
  );
};

export default Videosection;
