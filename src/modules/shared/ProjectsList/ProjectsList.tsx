import React from "react";
import { Project } from "../Project/Project";
import styles from "./ProjectsList.module.scss";
import { Project as ProjectType } from "../../../types/Project";

type Props = {
  projects: ProjectType[];
};

export const ProjectsList: React.FC<Props> = ({ projects }) => {
  return (
    <div className={styles["project-list"]} id="projects-section">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};
