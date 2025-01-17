import React from "react";
import styles from "./SendForm.module.scss";

export const SendForm: React.FC = () => {
  return (
    <form className={styles["send-form"]} action="">
      <input
        className={styles["send-form__input"]}
        placeholder="Введіть ваше ім’я"
        type="text"
      />
      <input
        className={styles["send-form__input"]}
        placeholder="Номер телефону"
        type="tel"
      />

      <textarea
        className={`${styles["send-form__input"]} ${styles["send-form__input--message"]}`}
        name="message"
        placeholder="Повідомлення"
      />

      <button
        type="submit"
        className={`${styles["send-form__button"]} button-send`}
      >
        Відправити
      </button>
    </form>
  );
};
