import React from "react";
import styles from "./Project.module.scss";

type Props = {
  index: number;
};

export const Project: React.FC<Props> = ({ index }) => {
  return (
    <article className={styles["project"]}>
      <a href="#product">
        <span>Детальніше</span>
        <img src={`./images/projects/0${index}.jpg`} alt="Project" />
      </a>

      <h3 className={styles["project__description"]}>Інтер’єр кухні</h3>
    </article>
  );
};
