import { useCallback, useMemo, useState, type JSX } from "react";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/TrainingForm/TrainingForm";
import List from "../../components/TrainingList/TrainingList";
import type { Training, TrainingInput } from "../../types";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import {
  addTraining,
  removeTraining,
  updateTraining,
} from "../../store/trainings.slice";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import styles from "../../App.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { BottomSheet } from "./BottomSheet/BottomSheet.tsx";

export function Home(): JSX.Element {
  const trainings = useSelector((state: RootState) => state.training.trainings);
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [isOpen, setIsOpen] = useState(false);

  const onUpdate = (updated: Training): void => {
    dispatch(updateTraining(updated));
  };

  const [selectedTrainingId, setSelectedTrainingId] = useState<number | null>(
    null,
  );

  const onAddTraining = (data: TrainingInput) => {
    dispatch(addTraining(data));
  };

  const deleteTraining = useCallback(
    (id: number): void => {
      dispatch(removeTraining(id));
    },
    [dispatch],
  );

  const onSelect = useCallback((id: number): void => {
    setSelectedTrainingId(id);
  }, []);

  const onClose = useCallback(() => {
    setSelectedTrainingId(null);
  }, [setSelectedTrainingId]);

  const selectedTraining = useMemo(
    () =>
      selectedTrainingId !== null
        ? trainings.find((el) => el.id === selectedTrainingId)
        : undefined,
    [trainings, selectedTrainingId],
  );

  const trainingsSorted = useMemo(
    () =>
      [...trainings].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    [trainings],
  );

  return (
    <>
      <div className={styles["layout"]}>
        {!isMobile ? (
          <Form addTraining={onAddTraining} />
        ) : (
          <>
            <button className={styles.buttonAddTrain} onClick={() => setIsOpen(true)}>Добавить тренировку</button>

            {isOpen && (
              <BottomSheet onClose={() => setIsOpen(false)}>
                <Form addTraining={onAddTraining} />
              </BottomSheet>
            )}
          </>
        )}

        <List
          trainings={trainingsSorted}
          deleteTraining={deleteTraining}
          onSelect={onSelect}
        />
      </div>
      {selectedTraining && (
        <Modal
          training={selectedTraining}
          onClose={onClose}
          onUpdate={onUpdate}
        />
      )}
    </>
  );
}
