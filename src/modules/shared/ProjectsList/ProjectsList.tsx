import React from "react";
import { Project } from "../Project/Project";
import styles from "./ProjectsList.module.scss";

export const ProjectsList: React.FC = () => {
  return (
    <div className={styles["project-list"]} id="projects-section">
      {[1, 2, 3, 4, 5, 6].map((project) => (
        <Project key={crypto.randomUUID()} index={project} />
      ))}
    </div>
  );
};
