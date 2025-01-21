import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import hero1 from "../../../../images/hero/hero_1.jpg";
import hero2 from "../../../../images/hero/hero_2.jpg";
import hero3 from "../../../../images/hero/hero_3.jpg";

import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  const scrollToProjectsSection = () => {
    const section = document.getElementById("projects-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`page__hero ${styles["hero"]}`}>
      <div className={`${styles["hero__wrapper"]} hero-wrapper`}>
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          speed={1500}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          className="hero-swiper"
        >
          <SwiperSlide className="hero-slide">
            <img src={hero1} alt="Content" />
          </SwiperSlide>

          <SwiperSlide className="hero-slide">
            <img src={hero2} alt="Content" />
          </SwiperSlide>

          <SwiperSlide className="hero-slide">
            <img src={hero3} alt="Content" />
          </SwiperSlide>
        </Swiper>

        <h1 className={styles["hero__title"]}>
          Професійний підхід до кожного проекту
        </h1>
      </div>

      <p className={styles["hero__subtitle"]}>Будуємо мрії, втілюємо ідеї</p>

      <button
        className={styles["hero__button"]}
        onClick={scrollToProjectsSection}
      >
        <img src="./images/down.svg" alt="down" />
      </button>
    </section>
  );
};
