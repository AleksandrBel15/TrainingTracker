import "./HeatMap.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { buildHeatmapData } from "../../../utils/heatMap.ts";

export function HeatMap() {
  const trainings = useSelector((state: RootState) => state.training.trainings);

  const data = buildHeatmapData(trainings, 120);

  return (
    <div className="container-square">
      {data.map((day) => {
        let className = "square square-gray";

        if (day.count > 0) {
          className = "square square-blue";
        }

        return <div key={day.date} className={className}></div>;
      })}
    </div>
  );
}
