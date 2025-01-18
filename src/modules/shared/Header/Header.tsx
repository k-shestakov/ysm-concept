import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { FormPopup } from "../FormPopup";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("scroll-stop");
    } else {
      document.body.classList.remove("scroll-stop");
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsFixed(false);
      } else if (currentScrollY < lastScrollY) {
        setIsFixed(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={cn(styles["header"], {
          [styles["header--absolute"]]: !isFixed,
        })}
      >
        <a href="#home" className={styles["header__logo"]}>
          <img src="./images/logo.png" alt="YSM concept" />
        </a>

        <div
          className={cn(styles["header__menu"], "menu", {
            "menu--open": menuOpen,
          })}
        >
          <nav className="menu__body">
            <button className="menu__close" onClick={() => setMenuOpen(false)}>
              <img src="./images/close.svg" alt=">" />
            </button>

            <ul className="menu__list">
              <li className="menu__item">
                <a href="#link" className="menu__link">
                  ПРОЄКТИ
                </a>
              </li>

              <li className="menu__item">
                <a href="#link" className="menu__link">
                  ПРО НАС
                </a>
              </li>

              <li className="menu__item">
                <a href="#link" className="menu__link">
                  КОНТАКТИ
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="menu__cost button"
            onClick={() => setPopupOpen(true)}
          >
            <span>ДІЗНАТИСЬ ВАРТІСТЬ</span>
            <span>ЦІНА</span>
          </button>

          <button
            type="button"
            className="menu__icon icon-menu"
            onClick={() => setMenuOpen(true)}
          >
            <img src="./images/burger.svg" alt="menu" />
          </button>
        </div>

        <div
          className={cn("overlay", { hidden: !menuOpen })}
          onClick={() => setMenuOpen(false)}
        ></div>
      </header>

      <FormPopup isOpen={popupOpen} onOpen={setPopupOpen} />
    </>
  );
};
