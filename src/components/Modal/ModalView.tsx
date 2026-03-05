import type { ModalViewProps } from "../../types";
import "./Modal.css";

function ModalView({ training, setIsEditing, sklon }: ModalViewProps) {
  return (
    <div className="modal-inner">
      <div className="head-modal">
        <p className="modal-title">Название: {training.title}</p>
        <p className="modal-date">{training.date}</p>
      </div>
      <p className="modal-desc">
        Описание: <br />
        {training.description}
      </p>
      <p>Время тренировки: {training.duration} {sklon(training.duration)}</p>
      <p>Самочувствие: {training.health}/5</p>
      <div className="bottom-modal">
        <button className="edit-button" onClick={setIsEditing}>
          Редактировать
        </button>
      </div>
    </div>
  );
}

export default ModalView;
