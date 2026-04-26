import React, { useState } from "react";
import type { ModalEditProps, Training } from "../../types";
import styles from "./Modal.module.css";
import cn from "classnames";

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
        <input
          id="edit-name"
          className={styles["modal-title-input"]}
          type="text"
          value={draft.title}
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
        />
      </div>
      <div className={styles["date-row"]}>
        <label className={styles["modal-label"]} htmlFor="edit-date">
          Дата
        </label>
        <input
          id="edit-date"
          className={styles["modal-date-input"]}
          type="date"
          value={draft.date}
          onChange={(e) => setDraft({ ...draft, date: e.target.value })}
        />
      </div>
      <div className={styles["modal-desc"]}>
        <label className={styles["modal-label"]} htmlFor="edit-textarea">
          Описание
        </label>
        <textarea
          id="edit-textarea"
          value={draft.description}
          onChange={(e) => setDraft({ ...draft, description: e.target.value })}
        />
      </div>
      <div className={styles["field-row"]}>
        <span className={styles["field-label"]}>Время тренировки</span>
        <input
          className={styles["small-input"]}
          type="text"
          value={draft.duration}
          onChange={(e) =>
            setDraft({ ...draft, duration: Number(e.target.value) })
          }
        />
        <span>{formatDays(Number(draft.duration))}</span>
      </div>
      <div className={styles["field-row"]}>
        <span className={styles["field-label"]}>Самочувствие</span>
        <div className={styles["health-row"]}>
          <select
            className={styles["health-select"]}
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
        </div>
      </div>
      <div className={styles["bottom-modal"]}>
        <button
          className={cn(styles["edit-button"], styles["edit-cancel-button"])}
          onClick={onCancel}
        >
          Отмена
        </button>
        <button
          className={cn(styles["edit-button"], styles["edit-save-button"])}
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
