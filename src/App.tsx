import styles from "./App.module.css";
import { BottomNav } from "./components/BottomNav/BottomNav";

export function App() {

  return (
    <div className={styles["app-container"]}>
      <header>
        <h1 className={styles["app-title"]}>
          Трекер тренировок
        </h1>
      </header>
      <BottomNav />
    </div>
  );
}


