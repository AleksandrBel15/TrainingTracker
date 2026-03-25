import { useCallback, useEffect, useState } from "react";
import type { ModalProps } from "../../types";
import "./Modal.css";
import ModalView from "./ModalView";
import ModalEdit from "./ModalEdit";
import { sklon } from '../../utils/sklonFunc.ts';

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
  const handleSave = useCallback((updatedTraining: typeof training) => {
    onUpdate(updatedTraining);
  }, [onUpdate]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          {isEditing ? (
            <ModalEdit
              training={training}
              onCancel={handleCancelEditing}
              onSave={handleSave}
              sklon={sklon}
            />
          ) : (
            <ModalView
              training={training}
              setIsEditing={handleSetEditing}
              sklon={sklon}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
