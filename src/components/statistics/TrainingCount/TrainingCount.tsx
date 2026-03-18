import { useSelector } from "react-redux";
import type { Training } from "../../../types";
import "./TrainingCount.css";
import type { RootState } from "../../../store/store";

export function TrainingCount() {
  const trainings: Training[] = useSelector(
    (state: RootState) => state.training.trainings,
  );

  return <div className="card-count">{trainings.length}</div>;
}
