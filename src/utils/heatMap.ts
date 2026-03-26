export interface HeatmapDay {
  date: string; 
  count: number;
};

function getLocalDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function buildHeatmapData(
  trainings: { date: string }[],
  daysCount: number = 120
): HeatmapDay[] {
  const countMap = new Map<string, number>();

  trainings.forEach(({ date }) => {
    const dayKey = getLocalDateKey(new Date(date));
    countMap.set(dayKey, (countMap.get(dayKey) || 0) + 1);
  });

  const today = new Date();

  return Array.from({ length: daysCount }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (daysCount - 1 - i));
    const dayKey = getLocalDateKey(date);

    return {
      date: dayKey,
      count: countMap.get(dayKey) || 0,
    };
  });
}