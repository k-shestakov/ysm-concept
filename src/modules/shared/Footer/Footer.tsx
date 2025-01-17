import React from "react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer__rights"]}>Всі права захищені ©2025</p>

      <ul className={styles["footer__communications"]}>
        <li className={styles["footer__item"]}>
          <a href="tel:+380963457890" className={styles["footer__link"]}>
            {"+38 (096) 345 78 90"}
          </a>
        </li>

        <li className={styles["footer__item"]}>
          <a href="#instagram" className={styles["footer__link"]}>
            instagram
          </a>
        </li>

        <li className={styles["footer__item"]}>
          <a href="#behance" className={styles["footer__link"]}>
            behance
          </a>
        </li>

        <li className={styles["footer__item"]}>
          <a href="#linkedin" className={styles["footer__link"]}>
            linkedin
          </a>
        </li>
      </ul>
    </footer>
  );
};
