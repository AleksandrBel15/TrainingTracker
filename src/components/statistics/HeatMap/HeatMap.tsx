import "./HeatMap.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { buildHeatmapData } from "../../../utils/heatMap.ts";
import React, { useMemo } from "react";

function Square({ count }: { count: number }) {
  const className = count > 0 ? "square square-blue" : "square square-gray";
  return <div className={className}></div>;
}

const MemoSquare = React.memo(Square);

export function HeatMap() {
  const trainings = useSelector((state: RootState) => state.training.trainings);

  const data = useMemo(() => buildHeatmapData(trainings, 120), [trainings]);

  return (
    <div className="container-square">
      {data.map((day) => (
        <MemoSquare key={day.date} count={day.count} />
      ))}
    </div>
  );
}