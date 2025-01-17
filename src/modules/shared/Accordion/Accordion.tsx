import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import styles from "./Accordion.module.scss";

type Props = {
  title: string;
  text: string[];
};

export const Accordion: React.FC<Props> = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && isOpen) {
      const computedStyle = window.getComputedStyle(contentRef.current);
      const paddingBottom = parseInt(computedStyle.padding.split(" ")[1]);

      contentRef.current.style.height = `${
        contentRef.current.scrollHeight + paddingBottom * 1.5
      }px`;
    }

    if (contentRef.current && !isOpen) {
      contentRef.current.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <div className={styles["accordion"]}>
      <button
        className={styles["accordion__button"]}
        onClick={() => setIsOpen((c) => !c)}
      >
        <h4 className={styles["accordion__title"]}>{title}</h4>

        <img
          className={cn(styles["accordion__icon"], {
            [styles["accordion__icon--rotate"]]: isOpen,
          })}
          src="./images/down.svg"
          alt="down"
        />
      </button>

      <div
        ref={contentRef}
        className={cn(styles["accordion__text"], {
          [styles["accordion__text--open"]]: isOpen,
        })}
      >
        {text.map((str) => (
          <p key={crypto.randomUUID()}>{str}</p>
        ))}
      </div>
    </div>
  );
};
