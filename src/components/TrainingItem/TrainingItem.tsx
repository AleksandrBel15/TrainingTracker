import React from "react";
import type { TrainingItemProps } from "../../types";
import styles from "./TrainingItem.module.css";

function Item({ training, deleteTraining, onSelect }: TrainingItemProps) {
  const handleSelect = () => onSelect(training.id);
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteTraining(training.id);
  };

  return (
    <div className={styles["training-item"]} onClick={handleSelect}>
      <div className={styles["training-title"]}>{training.title}</div>
      <div className={styles["training-date"]}>{training.date}</div>
      <button className={styles["delete-button"]} onClick={handleDelete} aria-label="Удалить тренировку">
        X
      </button>
    </div>
  );
}

export default React.memo(Item);
