import { configureStore } from "@reduxjs/toolkit";
import trainingReducer from "./trainings.slice";
import type { Training } from "../types";

const saved = localStorage.getItem("trainings");
const preloadedTrainings: Training[] = saved ? JSON.parse(saved) : [];

export const store = configureStore({
  reducer: {
    training: trainingReducer,
  },
  preloadedState: { training: { trainings: preloadedTrainings } },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
