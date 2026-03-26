import React from "react";
import type { TrainingListProps } from "../../types";
import styles from './TrainingList.module.css';
import Item from "../TrainingItem/TrainingItem";

function List({ trainings, deleteTraining, onSelect }: TrainingListProps) {
  return (
    <div className={styles["training-list"]}>
      <h2>Список тренировок</h2>

      <div>
        {trainings.length === 0
          ? "Пора тренироваться..."
          : trainings.map((training) => (
              <Item
                key={training.id}
                training={training}
                deleteTraining={deleteTraining}
                onSelect={onSelect}
              />
            ))}
      </div>
    </div>
  );
}

export default React.memo(List);