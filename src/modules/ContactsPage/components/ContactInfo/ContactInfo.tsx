import React from "react";
import styles from "./ContactInfo.module.scss";

export const ContactInfo: React.FC = () => {
  return (
    <div className={`${styles["contact-info"]} padding-top`}>
      <ul className={styles["contact-info__list"]}>
        <li className={styles["contact-info__item"]}>
          <p className={styles["contact-info__type"]}>Поштова скринька:</p>

          <a
            href="mailto:ysm.concept2024@gmail.com"
            className={styles["contact-info__contact"]}
          >
            ysm.concept2024@gmail.com
          </a>
        </li>

        <li className={styles["contact-info__item"]}>
          <p className={styles["contact-info__type"]}>
            Телефонуйте за номером:
          </p>

          <a
            href="tel:+380963457890"
            className={styles["contact-info__contact"]}
          >
            {"+38 (096) 345 78 90"}
          </a>
        </li>
      </ul>
    </div>
  );
};
