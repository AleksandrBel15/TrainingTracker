import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { buildHeatmapData } from "../../../utils/heatMap";
import React, { useMemo } from "react";

function TrainingGraph() {
  const trainings = useSelector((state: RootState) => state.training.trainings);

  const data = useMemo(() => buildHeatmapData(trainings, 30), [trainings]);

  return (
    <div style={{ width: "100%", minWidth: 0 }}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

        <XAxis
          dataKey="date"
          tickFormatter={(value) => value.slice(5)}
          tick={{ fontSize: 12 }}
        />

        <YAxis allowDecimals={false} domain={[0, 3]} />

        <Tooltip
          labelFormatter={(value) => `Дата: ${value}`}
          formatter={(value) => [`${value}`, "Тренировки"]}
        />

        <Line
          type="monotone"
          dataKey="count"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default React.memo(TrainingGraph);