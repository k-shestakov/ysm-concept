import React from "react";
import styles from "./Project.module.scss";
import { Project as ProjectType } from "../../../types/Project";

type Props = {
  project: ProjectType;
};

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <article className={styles["project"]}>
      <a href="#product">
        <span>Детальніше</span>
        <img src={project.image} alt="Project" />
      </a>

      <h3 className={styles["project__description"]}>{project.title}</h3>
    </article>
  );
};
