import styles from "./StatPage.module.css";
import React, { useMemo } from "react";
import StatCard from "../StatCard/StatCard.tsx";
import { TrainingCount } from "../TrainingCount/TrainingCount.tsx";
import Streak from "../Streak/Streak.tsx";
import TrainingGraph from "../TrainingGraph/TrainingGraph.tsx";
import { HeatMap } from "../HeatMap/HeatMap.tsx";

function StatPage() {
  const trainingCountCard = useMemo(() => <TrainingCount />, []);
  const streakCard = useMemo(() => <Streak />, []);
  const heatMapCard = useMemo(() => <HeatMap />, []);
  const trainingGraphCard = useMemo(() => <TrainingGraph />, []);

  return (
    <div className={styles["page"]}>
      <StatCard title="Количество тренировок">{trainingCountCard}</StatCard>
      <StatCard title="Ударный режим">{streakCard}</StatCard>
      <StatCard title="Активность">{heatMapCard}</StatCard>
      <StatCard title="График тренировок">{trainingGraphCard}</StatCard>
    </div>
  );
}

export default React.memo(StatPage);
