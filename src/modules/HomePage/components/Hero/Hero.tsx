import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  return (
    <section className={`page__hero ${styles["hero"]}`}>
      <div className={styles["hero__wrapper"]}>
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
            <img src="./images/hero/hero_1.jpg" alt="Content Image" />
          </SwiperSlide>

          <SwiperSlide className="hero-slide">
            <img src="./images/hero/hero_2.jpg" alt="Content Image" />
          </SwiperSlide>

          <SwiperSlide className="hero-slide">
            <img src="./images/hero/hero_3.jpg" alt="Content Image" />
          </SwiperSlide>
        </Swiper>

        <h1 className={styles["hero__title"]}>
          Створюємо простори, що надихають
        </h1>
      </div>

      <p className={styles["hero__subtitle"]}>Будуємо мрії, втілюємо ідеї</p>

      <a href="#projects-section" className={styles["hero__button"]}>
        <img src="./images/down.svg" alt="down" />
      </a>
    </section>
  );
};
