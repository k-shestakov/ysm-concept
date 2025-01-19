import { Form } from "../shared/Form";
import styles from "./AboutPage.module.scss";

export const AboutPage = () => {
  return (
    <section className={`page__about-us  ${styles["about-us"]} padding-top`}>
      <h2 className="about-us__title">About us</h2>

      <Form />
    </section>
  );
};
