import React from "react";
import type { ModalViewProps } from "../../types";
import styles from "./Modal.module.css";

function ModalView({ training, setIsEditing, formatDays }: ModalViewProps) {
  return (
    <div className={styles["modal-inner"]}>
      <div className={styles["head-modal"]}>
        <p className={styles["modal-title"]}>{training.title}</p>
        <p className={styles["modal-date"]}>{training.date}</p>
      </div>
      <p className={styles["modal-desc"]}>
        Описание: <br />
        {training.description}
      </p>
      <p>
        Время тренировки: {training.duration} {formatDays(training.duration)}
      </p>
      <p>Самочувствие: {training.health}/5</p>
      <div className={styles["bottom-modal"]}>
        <button className={styles["edit-button"]} onClick={setIsEditing}>
          Редактировать
        </button>
      </div>
    </div>
  );
}

export default React.memo(ModalView);
