import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import styles from "./SendForm.module.scss";

interface DataForm {
  customerName: string;
  phoneNumber: number;
  message: string;
}

export const SendForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataForm>();

  const onSubmit: SubmitHandler<DataForm> = (data) => {
    console.log(data);
    reset();
  };

  const onError: SubmitErrorHandler<DataForm> = (data) => {
    console.log(data);
  };

  return (
    <form
      className={styles["send-form"]}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="send-form__inner">
        <input
          {...register("customerName", {
            required: "Поле є обов'язковим",
            validate: (value) => {
              return value.trim() === value
                ? true
                : "Значення містить зайві пробіли";
            },
            minLength: {
              value: 2,
              message: "Мінімум 2 симлова",
            },
          })}
          className={styles["send-form__input"]}
          placeholder="Введіть ваше ім’я"
          type="text"
        />
        {errors?.customerName && (
          <p className="send-form__error">
            {errors?.customerName?.message || "Помилка"}
          </p>
        )}
      </div>

      <div className="send-form__inner">
        <input
          {...register("phoneNumber", {
            required: "Поле є обов'язковим",
            pattern: {
              value: /^[0-9]*$/,
              message: "Некоректний символ",
            },
            minLength: {
              value: 10,
              message: "Мінімум 10 цифр",
            },
          })}
          className={styles["send-form__input"]}
          placeholder="Номер телефону"
          type="tel"
        />
        {errors?.phoneNumber && (
          <p className="send-form__error">
            {errors?.phoneNumber?.message || "Помилка"}
          </p>
        )}
      </div>

      <textarea
        {...register("message")}
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
