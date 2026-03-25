import "./HeatMap.css";
import type { Training } from "../../../types";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

export function HeatMap() {
  const days: number[] = Array.from(
    { length: 120 },
    (_, index) => index,
  ).reverse();

  const trainings: Training[] = useSelector(
    (state: RootState) => state.training.trainings,
  );

  const map: Map<number, boolean> = new Map();

  for (const el of trainings) {
    map.set(new Date(el.date).setHours(0, 0, 0, 0), true);
  }

  const trainingsMap = (squareId: number) => {
    const dateSquare: number =
      new Date().setHours(0, 0, 0, 0) - squareId * 24 * 60 * 60 * 1000;

    if (map.has(dateSquare)) {
      return <div key={squareId} className="square square-blue"></div>;
    }

    return <div key={squareId} className="square square-gray"></div>;
  };

  return (
    <div className="container-square">
      {days.map((squareId) => trainingsMap(squareId))}
    </div>
  );
}
