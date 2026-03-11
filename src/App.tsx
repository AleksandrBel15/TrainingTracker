import "./App.css";
import { BottomNav } from "./components/BottomNav/BottomNav";

export function App() {

  return (
    <div className="app-container">
      <header>
        <h1 className="app-title">Трекер тренировок</h1>
      </header>
      <BottomNav />
    </div>
  );
}

/**
 * Фильтр
 * Статистика
 * useLocalStorage
 */
