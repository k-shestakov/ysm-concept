import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Team.module.scss";

export const Team: React.FC = () => {
  return (
    <div className={styles["team"]}>
      <h3 className={`${styles["team__title"]} title`}>Команда</h3>

      <Swiper
        slidesPerView={2.2}
        spaceBetween={15}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },

          0: {
            slidesPerView: 1.4,
          },
        }}
        className="team-swiper"
      >
        <SwiperSlide>
          <div className={styles["team__person"]}>
            <div className={styles["team__image"]}>
              <img src="./images/about-us/person-1.jpg" alt="Person" />
            </div>

            <div className={styles["team__info"]}>
              <p className={styles["team__name"]}>Юрій Град</p>
              <p className={styles["team__position"]}>Провідний архітектор</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles["team__person"]}>
            <div className={styles["team__image"]}>
              <img src="./images/about-us/person-2.jpg" alt="Person" />
            </div>

            <div className={styles["team__info"]}>
              <p className={styles["team__name"]}>Юрій Град</p>
              <p className={styles["team__position"]}>Провідний архітектор</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles["team__person"]}>
            <div className={styles["team__image"]}>
              <img src="./images/about-us/person-3.jpg" alt="Person" />
            </div>

            <div className={styles["team__info"]}>
              <p className={styles["team__name"]}>Юрій Град</p>
              <p className={styles["team__position"]}>Провідний архітектор</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles["team__person"]}>
            <div className={styles["team__image"]}>
              <img src="./images/about-us/person-1.jpg" alt="Person" />
            </div>

            <div className={styles["team__info"]}>
              <p className={styles["team__name"]}>Юрій Град</p>
              <p className={styles["team__position"]}>Провідний архітектор</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
