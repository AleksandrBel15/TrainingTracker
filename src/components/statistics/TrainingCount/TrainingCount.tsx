import React from "react";
import { useSelector } from "react-redux";
import type { Training } from "../../../types";
import "./TrainingCount.css";
import type { RootState } from "../../../store/store";

function TrainingCountComponent() {
  const trainings: Training[] = useSelector(
    (state: RootState) => state.training.trainings
  );

  return <div className="card-count">{trainings.length}</div>;
}

export const TrainingCount = React.memo(TrainingCountComponent);