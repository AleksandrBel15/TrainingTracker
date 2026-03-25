export interface HeatmapDay {
  date: string; 
  count: number;
};

export function buildHeatmapData(
  trainings: { date: string }[],
  daysCount: number = 120
): HeatmapDay[] {
  const countMap: Map<string, number> = new Map();

  for (const el of trainings) {
    const date = new Date(el.date);
    const dayKey = date.toISOString().slice(0, 10);

    if (countMap.has(dayKey)) {
      countMap.set(dayKey, countMap.get(dayKey)! + 1);
    } else {
      countMap.set(dayKey, 1);
    }
  }

  const result: HeatmapDay[] = [];

  for (let i = daysCount - 1; i >= 0; i--) {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - i);

    const dayKey = date.toISOString().slice(0, 10);

    result.push({
      date: dayKey,
      count: countMap.get(dayKey) || 0,
    });
  }

  return result;
}