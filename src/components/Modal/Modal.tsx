import { useCallback, useEffect, useState } from "react";
import type { ModalProps } from "../../types";
import styles from "./Modal.module.css";
import ModalView from "./ModalView";
import ModalEdit from "./ModalEdit";
import { formatDays } from "../../utils/formatDays";

function Modal({ training, onClose, onUpdate }: ModalProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSetEditing = useCallback(() => setIsEditing(true), []);
  const handleCancelEditing = useCallback(() => setIsEditing(false), []);
  const handleSave = useCallback(
    (updatedTraining: typeof training) => {
      onUpdate(updatedTraining);
    },
    [onUpdate],
  );

  return (
    <div className={styles["overlay"]} onClick={onClose}>
      <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["modal-content"]}>
          {isEditing ? (
            <ModalEdit
              training={training}
              onCancel={handleCancelEditing}
              onSave={handleSave}
              formatDays={formatDays}
            />
          ) : (
            <ModalView
              training={training}
              setIsEditing={handleSetEditing}
              formatDays={formatDays}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
