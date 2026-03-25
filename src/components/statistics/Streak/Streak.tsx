import { useSelector } from "react-redux";
import "./Streak.css";
import type { RootState } from "../../../store/store";
import type { Training } from "../../../types";
import { useMemo } from "react";
import { streakInTrainings } from "../../../utils/streak.utils";

export function Streak() {
  const trainings: Training[] = useSelector(
    (state: RootState) => state.training.trainings,
  );

  const streak = useMemo(() => streakInTrainings(trainings), [trainings]);

  return <div className="card-streak">{ streak }</div>;
}
