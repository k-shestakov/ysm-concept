import styles from "./NotFoundPage.module.scss";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles["not-found"]} padding-top`}>
      <h2 className={`${styles["not-found__title"]}`}>Ой! Щось пішло не так</h2>

      <button
        className={`${styles["not-found__back"]} `}
        onClick={() => navigate("/")}
      >
        На головну
      </button>
    </div>
  );
};
