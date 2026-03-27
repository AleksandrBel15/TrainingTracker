import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Training, TrainingInput } from "../types";

export interface TrainingState {
  trainings: Training[];
}

export const initialState: TrainingState = {
  trainings: [],
};

export const trainingsSlice = createSlice({
  name: "training",
  initialState,
  reducers: {
    addTraining: (state, action: PayloadAction<TrainingInput>) => {
      const train: Training = {
        id: Date.now(),
        done: false,
        ...action.payload,
      };

      if (isNaN(train.id) || !train.id) {
        throw new Error('Invalid ID');
      }

      state.trainings.push(train);
    },
    removeTraining: (state, action: PayloadAction<number>) => {
     state.trainings = state.trainings.filter((el) => el.id !== action.payload);
    },
    updateTraining: (state, action: PayloadAction<Training>) => {
      const index = state.trainings.findIndex((el) => el.id === action.payload.id);
      if (index !== -1) {
        state.trainings[index] = action.payload;
      }
    }
  },
});

export const { addTraining, removeTraining, updateTraining } = trainingsSlice.actions;
export default trainingsSlice.reducer;
