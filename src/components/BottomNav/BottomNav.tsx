import styles from "./BottomNav.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { HomeIcon, StatsIcon } from "./Icons";
import cn from "classnames";

export function BottomNav() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    cn(styles["nav-item"], {
      [styles["active"]]: isActive,
    });

  return (
    <>
      <nav className={styles["bottom-nav"]}>
        <NavLink to="/" className={navClass}>
          <HomeIcon className={styles["nav-icon"]} />
        </NavLink>
        <NavLink to="/stats" className={navClass}>
          <StatsIcon className={styles["nav-icon"]} />
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
