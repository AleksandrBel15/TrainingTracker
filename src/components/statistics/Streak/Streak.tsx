import { useSelector } from "react-redux";
import "./Streak.css";
import type { RootState } from "../../../store/store";
import type { Training } from "../../../types";
import { useMemo } from "react";

export function Streak() {
  const trainings: Training[] = useSelector(
    (state: RootState) => state.training.trainings,
  );

  const getBetweenDays = (firstDate: number, secondDate: number) => {
    const res = firstDate - secondDate;
    return res / 1000 / 60 / 60 / 24;
  }

  const startDay = (day: string) => {
    return new Date(day).setHours(0, 0, 0, 0);
  }

  const calculate = useMemo(() => {
    let count = 0;
    
    if (trainings.length === 0) return count;

    const trainingsSorted = [...trainings].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const today = new Date().setHours(0, 0, 0, 0);
    const last = new Date(trainingsSorted[trainingsSorted.length - 1].date).setHours(0, 0, 0, 0);

    const betweenToday = getBetweenDays(today, last);

    if (betweenToday === 0 || betweenToday === 1) {
      count = 1;
    } else {
      count = 0;
      return count;
    }

    for (let i = trainingsSorted.length - 1; i > 0; i--) {
      const lastDay = startDay(trainingsSorted[i].date);
      const preLastDay = startDay(trainingsSorted[i - 1].date);

      const betweenDays = getBetweenDays(lastDay, preLastDay);

      if (betweenDays === 0) {
        continue;
      } else if (betweenDays === 1) {
        count = count + 1;
      } else {
        break;
      }
    }

    return count;
  }, [trainings]);

  return <div className="card-streak">{ calculate }</div>;
}
