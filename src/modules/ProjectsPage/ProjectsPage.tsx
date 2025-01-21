import { Form } from "../shared/Form";
import { ProjectsList } from "../shared/ProjectsList";
import styles from "./ProjectsPage.module.scss";
import { ProjectsFilter } from "./components/ProjectsFilter";

export const ProjectsPage = () => {
  return (
    <div className={`${styles["projects"]} padding-top`}>
      <ProjectsFilter />

      <ProjectsList projects={[1, 2, 3, 4, 5, 6]} />
      <Form />
    </div>
  );
};
