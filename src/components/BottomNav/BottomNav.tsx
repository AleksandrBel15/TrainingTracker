import "./BottomNav.css";
import { NavLink, Outlet } from "react-router-dom";
import { HomeIcon, StatsIcon } from "./Icons";

export function BottomNav() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `nav-item${isActive ? " active" : ""}`;

  return (
    <>
      <nav className="bottom-nav">
        <NavLink to="/" className={navClass}>
          <HomeIcon className="nav-icon" />
        </NavLink>
        <NavLink
          to="/stats"
          className={navClass}
        >
          <StatsIcon className="nav-icon" />
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
