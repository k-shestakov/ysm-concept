import { useState } from "react";
import { Form } from "../shared/Form";
import { ProjectsList } from "../shared/ProjectsList";
import styles from "./ProjectsPage.module.scss";
import { ProjectsFilter } from "./components/ProjectsFilter";
import projectsFromServer from "../../api/projects.json";
import { SortByType } from "../../types/SortBy";
import { Project } from "../../types/Project";

function getPreparedProjects(
  projects: Project[],
  { sortType }: { sortType: SortByType }
) {
  let preparedProjects = [...projects];

  if (sortType) {
    preparedProjects = preparedProjects.filter(
      (prj) => prj.category === sortType
    );
  }

  return preparedProjects;
}

export const ProjectsPage = () => {
  const [sortType, setSortyType] = useState<SortByType>(SortByType.all);
  const preparedProjects = getPreparedProjects(projectsFromServer, {
    sortType,
  });

  return (
    <div className={`${styles["projects"]} padding-top`}>
      <ProjectsFilter onSortBy={setSortyType} sortType={sortType} />

      <ProjectsList projects={preparedProjects} />
      <Form />
    </div>
  );
};
