import type { Training } from "../types";

export const getBetweenDays = (
  firstDate: number,
  secondDate: number,
): number => {
  return (firstDate - secondDate) / 1000 / 60 / 60 / 24;
};

export const startDay = (day: string): number => {
  return new Date(day).setHours(0, 0, 0, 0);
};

export function streakInTrainings(trainings: Training[]): number {
  let count: number = 0;

  if (trainings.length === 0) return count;

  const trainingsSorted: Training[] = [...trainings].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const today: number = new Date().setHours(0, 0, 0, 0);
  const last: number = new Date(
    trainingsSorted[trainingsSorted.length - 1].date,
  ).setHours(0, 0, 0, 0);

  const betweenToday: number = getBetweenDays(today, last);

  if (betweenToday === 0 || betweenToday === 1) {
    count = 1;
  } else {
    count = 0;
    return count;
  }

  for (let i = trainingsSorted.length - 1; i > 0; i--) {
    const lastDay: number = startDay(trainingsSorted[i].date);
    const preLastDay: number = startDay(trainingsSorted[i - 1].date);

    const betweenDays: number = getBetweenDays(lastDay, preLastDay);

    if (betweenDays === 0) {
      continue;
    } else if (betweenDays === 1) {
      count = count + 1;
    } else {
      break;
    }
  }
  return count;
}
