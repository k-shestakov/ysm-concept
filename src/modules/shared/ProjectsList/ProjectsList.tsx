import React from "react";
import { useTransition, animated } from "@react-spring/web";
import { Project } from "../Project/Project";
import styles from "./ProjectsList.module.scss";
import { Project as ProjectType } from "../../../types/Project";

type Props = {
  projects: ProjectType[];
};

export const ProjectsList: React.FC<Props> = ({ projects }) => {
  const transitions = useTransition(projects, {
    from: { opacity: 0, transform: "scale(0.5) translateY(50px)" },
    enter: { opacity: 1, transform: "scale(1) translateY(0)" },
    leave: { opacity: 0, transform: "scale(0.5) translateY(-50px)" },
    keys: (project) => project.id,
    // config: { tension: 250, friction: 20 },
    // trail: 100,
  });

  return (
    <div id="projects-section" className={styles["project-list"]}>
      {transitions((style, project) => (
        <animated.div
          style={style}
          key={project.id}
          className={styles["project-list__item"]}
        >
          <Project project={project} />
        </animated.div>
      ))}
    </div>
  );
};
