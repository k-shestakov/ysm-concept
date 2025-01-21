import { Form } from "../shared/Form";
import { Team } from "../shared/Team";
import styles from "./AboutPage.module.scss";
import { AboutInfo } from "./components/AboutInfo";

export const AboutPage = () => {
  return (
    <section className={`page__about-us  ${styles["about-us"]} padding-top`}>
      <AboutInfo />
      <Team />
      <Form />
    </section>
  );
};
