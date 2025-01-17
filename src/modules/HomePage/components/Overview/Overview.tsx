import React from "react";
import styles from "./Overview.module.scss";

export const Overview: React.FC = () => {
  return (
    <div className={`page__overview ${styles["overview"]}`}>
      <div className={styles["overview__video"]}>
        {/* <button className={styles["overview__pause"]}>Pause</button> */}

        <video controls autoPlay muted loop playsInline>
          <source type="video/webm" src="./videos/video.webm" />
          <source type="video/mp4" src="./videos/video.mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
};
