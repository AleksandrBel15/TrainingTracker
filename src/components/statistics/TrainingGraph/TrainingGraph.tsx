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

export function TrainingGraph() {
  const trainings = useSelector((state: RootState) => state.training.trainings);

  const data = buildHeatmapData(trainings, 30);

  return (
    <ResponsiveContainer width={600} height={300}>
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

        <YAxis allowDecimals={false} />

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
  );
}
