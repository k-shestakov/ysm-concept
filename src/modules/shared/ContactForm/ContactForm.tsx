import React from "react";
import styles from "./ContactForm.module.scss";
import { ContactSendForm } from "./components/ContactSendForm";

export const ContactForm: React.FC = () => {
  return (
    <section className={`page__contact-form  ${styles["contact-form"]}`}>
      <h2 className={`${styles["contact-form__title"]} title`}>
        Ми вам зателефонуємо
      </h2>

      <ContactSendForm />
    </section>
  );
};
