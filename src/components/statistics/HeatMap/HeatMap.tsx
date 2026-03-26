import styles from "./HeatMap.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { buildHeatmapData } from "../../../utils/heatMap";
import React, { useMemo } from "react";
import cn from 'classnames';

function Square({ count }: { count: number }) {
  
  const className = cn(styles['square'], {
    [styles['square-blue']]: count > 0,
    [styles['square-gray']]: !(count > 0)
  })
  return <div className={className}></div>;
}

const MemoSquare = React.memo(Square);

export function HeatMap() {
  const trainings = useSelector((state: RootState) => state.training.trainings);

  const data = useMemo(() => buildHeatmapData(trainings, 120), [trainings]);

  return (
    <div className={styles["container-square"]}>
      {data.map((day) => (
        <MemoSquare key={day.date} count={day.count} />
      ))}
    </div>
  );
}