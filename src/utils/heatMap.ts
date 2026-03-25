export interface HeatmapDay {
  date: string; 
  count: number;
};

export function buildHeatmapData(
  trainings: { date: string }[],
  daysCount: number = 120
): HeatmapDay[] {
  const countMap = new Map<string, number>();

  trainings.forEach(({ date }) => {
    const dayKey = new Date(date).toISOString().slice(0, 10);
    countMap.set(dayKey, (countMap.get(dayKey) || 0) + 1);
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Array.from({ length: daysCount }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (daysCount - 1 - i));
    const dayKey = date.toISOString().slice(0, 10);

    return {
      date: dayKey,
      count: countMap.get(dayKey) || 0,
    };
  });
}