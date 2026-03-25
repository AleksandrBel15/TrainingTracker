import React from "react";
import type { TrainingListProps } from "../../types";
import './TrainingList.css';
import Item from "../TrainingItem/TrainingItem";

function List({ trainings, deleteTraining, onSelect }: TrainingListProps) {
  return (
    <div className="training-list">
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