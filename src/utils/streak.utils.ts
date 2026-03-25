import type { Training } from "../types";

export const getBetweenDays = (firstDate: number, secondDate: number): number =>
  (firstDate - secondDate) / (1000 * 60 * 60 * 24);

export const startDay = (day: string): number =>
  new Date(day).setHours(0, 0, 0, 0);

export function streakInTrainings(trainings: Training[]): number {
  if (trainings.length === 0) return 0;

  const sorted = [...trainings].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const today = new Date().setHours(0, 0, 0, 0);
  let count = 0;

  let lastDay = startDay(sorted[sorted.length - 1].date);
  const diffFromToday = getBetweenDays(today, lastDay);

  if (diffFromToday === 0 || diffFromToday === 1) {
    count = 1;
  } else {
    return 0;
  }

  for (let i = sorted.length - 2; i >= 0; i--) {
    const currentDay = startDay(sorted[i].date);
    const daysBetween = getBetweenDays(lastDay, currentDay);

    if (daysBetween === 0) continue;
    if (daysBetween === 1) count++;
    else break;

    lastDay = currentDay;
  }

  return count;
}
