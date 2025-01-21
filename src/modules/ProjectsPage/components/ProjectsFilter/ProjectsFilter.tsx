import React from "react";
import styles from "./ProjectsFilter.module.scss";

export const ProjectsFilter: React.FC = () => {
  return (
    <div className={styles["projects-filter"]}>
      <button
        className={`${styles["projects-filter__type"]} ${styles["projects-filter__type--active"]}`}
      >
        Усі
      </button>
      <button className={styles["projects-filter__type"]}>Iнтер`єр</button>
      <button className={styles["projects-filter__type"]}>Aрхітектура</button>
    </div>
  );
};
