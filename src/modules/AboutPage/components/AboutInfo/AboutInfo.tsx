import React from "react";
import styles from "./AboutInfo.module.scss";

export const AboutInfo: React.FC = () => {
  return (
    <div className={styles["about-info"]}>
      <h3 className={`${styles["about-info__title"]} title`}>Про компанію</h3>
    </div>
  );
};
