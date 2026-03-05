import type { TrainingItemProps } from "../../types";
import "./TrainingItem.css";

function Item({ training, deleteTraining, onSelect }: TrainingItemProps) {
  return (
      <div className="training-item" onClick={() => onSelect(training.id)}>
        <div className="training-title">{training.title}</div>
        <div className="training-date">{training.date}</div>
        <button
          className="delete-button"
          onClick={() => {
            deleteTraining(training.id);
          }}
        >
          X
        </button>
      </div>
  );
}

export default Item;
