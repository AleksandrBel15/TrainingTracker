import "./App.css";
import type { Training, TrainingInput } from "./types.ts";
import { useCallback, useEffect, useState } from "react";
import Form from "./components/TrainingForm/TrainingForm.tsx";
import List from "./components/TrainingList/TrainingList.tsx";
import Modal from "./components/Modal/Modal.tsx";

function App() {
  const STORAGE_KEY = "trainings";

  const [trainings, setTrainings] = useState<Training[]>(() => {
    if (localStorage.getItem(STORAGE_KEY)) {
      const data = localStorage.getItem(STORAGE_KEY);
      if (typeof data === "string") {
        return JSON.parse(data);
      }
    } else {
      return [];
    }
  });

  const onUpdate = (updated: Training): void => {
    setTrainings((prev) =>
      prev.map((el) => (el.id === updated.id ? updated : el)),
    );
  };

  const [selectedTrainingId, setSelectedTrainingId] = useState<number | null>(null);

  const addTraining = (data: TrainingInput): void => {
    const train: Training = {
      id: Date.now(),
      done: false,
      ...data,
    };

    setTrainings((prev) => [...prev, train]);
  };

  const deleteTraining = (id: number): void => {
    const filterTrainings = trainings.filter((el) => {
      if (el.id !== id) {
        return el;
      }
    });
    setTrainings(filterTrainings);
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trainings));
  }, [trainings]);

  const onSelect = (id: number): void => {
    setSelectedTrainingId(id);
  }

  const onClose = useCallback(() => {
    setSelectedTrainingId(null);
  }, []);

  const selectedTraining =
    selectedTrainingId !== null
      ? trainings.find((el) => el.id === selectedTrainingId)
      : undefined;

  return (
    <div className="app-container">
      <h1 className="app-title">Трекер тренировок</h1>

      <div className="layout">
        <Form addTraining={addTraining} />

        <List
          trainings={trainings}
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
    </div>
  );
}

export default App;

/**
 * Фильтр
 * Статистика
 * useLocalStorage
 */
