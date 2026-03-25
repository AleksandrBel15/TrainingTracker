import type { TrainingInput } from "../types";

export type TrainingErrors = {
  title?: boolean;
  description?: boolean;
  duration?: boolean;
  health?: boolean;
};

export const validateTraining = (data: TrainingInput): TrainingErrors => {
  const { title, description, duration, health } = data;
  const errors: TrainingErrors = {};

  if (!title.trim()) errors.title = true;
  if (!description.trim()) errors.description = true;
  if (isNaN(duration) || duration <= 0) errors.duration = true;
  if (health < 1 || health > 5) errors.health = true;

  return errors;
};
