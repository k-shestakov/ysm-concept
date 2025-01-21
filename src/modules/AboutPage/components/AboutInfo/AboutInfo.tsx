import React from "react";
import styles from "./AboutInfo.module.scss";

export const AboutInfo: React.FC = () => {
  return (
    <div className={styles["about-info"]}>
      <h3 className={`${styles["about-info__title"]} title`}>Про компанію</h3>

      <div className={styles["about-info__text"]}>
        <p>
          Дійсно круті речі потрібно створювати разом з крутими людьми. Ми
          любимо те, чим займаємося і тому в роботі викладаємося на повну. Ми
          любимо те, чим займаємося і тому в роботі викладаємося на повну.
          Дійсно круті речі потрібно створювати разом з крутими людьми.{" "}
        </p>

        <div className={styles["about-info__image"]}>
          <img src="./images/about-us/team.jpg" alt="Team" />
        </div>

        <p>
          Ми любимо те, чим займаємося і тому в роботі викладаємося на повну. Ми
          любимо те, чим займаємося і тому в роботі викладаємося на повну.
        </p>

        <p>
          Ми любимо те, чим займаємося і тому в роботі викладаємося на повну. Ми
          любимо те, чим займаємося і тому в роботі викладаємося на повну.
        </p>
      </div>
    </div>
  );
};
