import { Form } from "../shared/Form";
import { ProjectsList } from "../shared/ProjectsList";
import styles from "./ProjectsPage.module.scss";

export const ProjectsPage = () => {
  return (
    <div className={`${styles["projects"]} padding-top`}>
      <div className={styles["projects__filters"]}>filters</div>

      <ProjectsList projects={[1, 2, 3, 4, 5, 6]} />
      <Form />
    </div>
  );
};
