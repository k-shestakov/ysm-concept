import React from "react";
import cn from "classnames";
import styles from "./FormPopup.module.scss";
import { SendForm } from "../Form/components/SendForm/SendForm";

type Props = {
  isOpen: boolean;
  onOpen: (v: boolean) => void;
};

export const FormPopup: React.FC<Props> = ({ isOpen, onOpen }) => {
  return (
    <>
      <div
        className={cn("overlay", { hidden: !isOpen })}
        onClick={() => onOpen(false)}
      ></div>
      <div className={cn(styles["pop-up"], { close: !isOpen })}>
        <button
          className={styles["pop-up__close"]}
          onClick={() => onOpen(false)}
        >
          <img src="./images/cross.svg" alt="X" />
        </button>

        <SendForm />
      </div>
    </>
  );
};
