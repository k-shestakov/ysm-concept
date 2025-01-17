import React from "react";
import styles from "./Services.module.scss";
import { services } from "../../../../content/services";
import { Accordion } from "../../../shared/Accordion";

export const Services: React.FC = () => {
  return (
    <section className={`page__services ${styles["services"]}`}>
      <h2 className={`${styles["services__title"]} title`}>Наші послуги</h2>

      {services.map((service) => (
        <Accordion key={service.id} title={service.title} text={service.text} />
      ))}
    </section>
  );
};
