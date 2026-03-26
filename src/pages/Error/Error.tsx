import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";

export function Error() {
  const navigate = useNavigate();

  return (
    <div className={styles["error-page"]}>
      <div className={styles["error-code"]}>404</div>
      <div className={styles["error-message"]}>Страница не найдена</div>
      <button className={styles["error-button"]} onClick={() => navigate("/")}>
        Вернуться на главную
      </button>
    </div>
  );
}