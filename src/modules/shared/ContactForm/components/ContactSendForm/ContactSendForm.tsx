import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import styles from "./ContactSendForm.module.scss";

interface DataForm {
  phoneNumber: number;
}

export const ContactSendForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataForm>();

  const onSubmit: SubmitHandler<DataForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className={styles["contact-form-send"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`send-form__inner ${styles["contact-form-send__inner"]}`}>
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
          type="tel"
          className={styles["contact-form-send__input"]}
          placeholder="Номер телефону"
        />

        {errors?.phoneNumber && (
          <p className="send-form__error">
            {errors?.phoneNumber?.message || "Помилка"}
          </p>
        )}
      </div>

      <button className={`${styles["contact-form-send__button"]} button-send`}>
        Замовити дзвінок
      </button>
    </form>
  );
};
