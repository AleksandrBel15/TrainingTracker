import type { TrainingInput } from "../types";

export type TrainingErrors = {
  title?: boolean;
  description?: boolean;
  duration?: boolean;
  health?: boolean;
};

export const validateTraining = (data: TrainingInput): TrainingErrors => {
    const errors: TrainingErrors = {};

    if (!data.title.trim()) {
        errors.title = true;
    }

    if (!data.description.trim()) {
        errors.description = true;
    }

    if (isNaN(data.duration) || data.duration <= 0) {
        errors.duration = true;
    }

    if (data.health < 1 || data.health > 5) {
        errors.health = true;
    }

    return errors;
};
