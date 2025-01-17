import React from "react";
import styles from "./Form.module.scss";
import { SendForm } from "./components/SendForm/SendForm";

export const Form: React.FC = () => {
  return (
    <section className={`page__form ${styles["form"]}`}>
      <h2 className={`${styles["form__title"]} title`}>Сконтактувати з нами</h2>

      <SendForm />
    </section>
  );
};
