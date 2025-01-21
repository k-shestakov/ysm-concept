import React, { useRef, useState } from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Team.module.scss";
import "swiper/css/navigation";

export const Team: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperInit = (swiper: any) => {
    swiperRef.current = swiper;

    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  };

  return (
    <div className={styles["team"]}>
      <h3 className={`${styles["team__title"]} title`}>Команда</h3>

      <div className={styles["team__swiper"]}>
        <button
          className={cn(
            styles["team__slide-button"],
            styles["team__slide-button--prev"],
            {
              [styles["team__slide-button--dis"]]: isBeginning,
            }
          )}
          onClick={() => swiperRef.current.slidePrev()}
          disabled={isBeginning}
        >
          <img src="./images/about-us/prev.svg" alt="<" />
        </button>

        <Swiper
          speed={1000}
          slidesPerView={2.2}
          spaceBetween={15}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            0: {
              speed: 500,
              slidesPerView: 1.4,
            },
          }}
          onSwiper={handleSwiperInit}
          className="team-swiper"
        >
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

        <button
          className={cn(
            styles["team__slide-button"],
            styles["team__slide-button--next"],
            {
              [styles["team__slide-button--dis"]]: isEnd,
            }
          )}
          onClick={() => swiperRef.current.slideNext()}
          disabled={isEnd}
        >
          <img src="./images/about-us/next.svg" alt=">" />
        </button>
      </div>
    </div>
  );
};
