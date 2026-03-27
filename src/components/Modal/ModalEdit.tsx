import React, { useState } from "react";
import type { ModalEditProps, Training } from "../../types";
import styles from "./Modal.module.css";
import cn from 'classnames';

function ModalEdit({ training, onCancel, onSave, formatDays }: ModalEditProps) {
  const [draft, setDraft] = useState<Training>({
    id: training.id,
    done: training.done,
    title: training.title,
    description: training.description,
    date: training.date,
    duration: training.duration,
    health: training.health,
  });

  return (
    <div className={styles["modal-inner"]}>
      <div className={styles["head-modal"]}>
        <p className={styles["modal-title"]}>
          {" "}
          <input
            type="text"
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          />
        </p>
        <p className={styles["modal-date"]}>
          <input
            type="date"
            value={draft.date}
            onChange={(e) => setDraft({ ...draft, date: e.target.value })}
          />
        </p>
      </div>
      <p className={styles["modal-desc"]}>
        Описание: <br />
        <textarea
          id="edit-textarea"
          value={draft.description}
          onChange={(e) => setDraft({ ...draft, description: e.target.value })}
        ></textarea>
      </p>
      <p>
        Время тренировки:{" "}
        <input
          type="text"
          value={draft.duration}
          onChange={(e) =>
            setDraft({ ...draft, duration: Number(e.target.value) })
          }
        />{" "}
        {formatDays(Number(draft.duration))}
      </p>
      <p>
        Самочувствие:{" "}
        <select
          value={draft.health}
          onChange={(e) =>
            setDraft({ ...draft, health: Number(e.target.value) })
          }
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        /5
      </p>
      <div className={styles["bottom-modal"]}>
        <button className={cn(styles["edit-button"], styles["edit-cancel-button"])} onClick={onCancel}>
          Отмена
        </button>
        <button
          className={cn(styles["edit-button"], styles["edit-cancel-button"])}
          onClick={() => {
            onSave(draft);
            onCancel();
          }}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default React.memo(ModalEdit);
