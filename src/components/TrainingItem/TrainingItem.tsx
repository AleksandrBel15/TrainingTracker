import React from "react";
import type { TrainingItemProps } from "../../types";
import "./TrainingItem.css";

function Item({ training, deleteTraining, onSelect }: TrainingItemProps) {
  const handleSelect = () => onSelect(training.id);
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // чтобы клик по кнопке не срабатывал на родителя
    deleteTraining(training.id);
  };

  return (
    <div className="training-item" onClick={handleSelect}>
      <div className="training-title">{training.title}</div>
      <div className="training-date">{training.date}</div>
      <button className="delete-button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default React.memo(Item);