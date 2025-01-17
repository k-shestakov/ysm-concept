import React from "react";
import styles from "./Overview.module.scss";

export const Overview: React.FC = () => {
  return (
    <div className={`page__overview ${styles["overview"]}`}>
      <div className={styles["overview__video"]}>
        {/* <button className={styles["overview__pause"]}>Pause</button> */}

        <video autoPlay muted loop>
          <source type="video/webm" src="./videos/video.webm" />
          <source type="video/mp4" src="./videos/video.mp4" />
        </video>
      </div>
    </div>
  );
};
