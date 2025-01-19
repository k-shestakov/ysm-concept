import React from "react";
import { Project } from "../Project/Project";
import styles from "./ProjectsList.module.scss";

type Props = {
  projects: number[];
};

export const ProjectsList: React.FC<Props> = ({ projects }) => {
  return (
    <div className={styles["project-list"]} id="projects-section">
      {projects.map((project) => (
        <Project key={crypto.randomUUID()} index={project} />
      ))}
    </div>
  );
};
