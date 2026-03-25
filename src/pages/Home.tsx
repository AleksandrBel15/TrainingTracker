import { useCallback, useEffect, useMemo, useState } from "react";
import Modal from "../components/Modal/Modal";
import Form from "../components/TrainingForm/TrainingForm";
import List from "../components/TrainingList/TrainingList";
import type { Training, TrainingInput } from "../types";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import {
  addTraining,
  removeTraining,
  updateTraining,
} from "../store/trainings.slice";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export function Home() {
  const STORAGE_KEY = "trainings";

  const trainings = useSelector((state: RootState) => state.training.trainings);
  const dispatch = useDispatch<AppDispatch>();

  const onUpdate = (updated: Training): void => {
    dispatch(updateTraining(updated));
  };

  const [selectedTrainingId, setSelectedTrainingId] = useState<number | null>(
    null,
  );

  const onAddTraining = (data: TrainingInput) => {
    dispatch(addTraining(data));
  };

  const deleteTraining = useCallback((id: number): void => {
    dispatch(removeTraining(id));
  }, [dispatch]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trainings));
    } catch (e) {
      console.error("Ошибка сохранения в localStorage", e);
    }
  }, [trainings]);

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
      <div className="layout">
        <Form addTraining={onAddTraining} />

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
