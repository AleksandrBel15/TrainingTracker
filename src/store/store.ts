import { configureStore } from "@reduxjs/toolkit";
import trainingReducer from "./trainings.slice";
import type { Training } from "../types";

const STORAGE_KEY = "trainings";
const saved = localStorage.getItem(STORAGE_KEY);
const preloadedTrainings: Training[] = saved ? JSON.parse(saved) : [];

export const store = configureStore({
  reducer: {
    training: trainingReducer,
  },
  preloadedState: { training: { trainings: preloadedTrainings } },
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.training.trainings));
  } catch(e) {
    console.error("Ошибка сохранения в localStorage", e);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
