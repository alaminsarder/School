import { NavLink } from "react-router-dom";
import menuData from "../../data/menuData";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-wrapper">
        <div className="logo">
          <NavLink to="/">School</NavLink>
        </div>

        <ul className="nav-links">
          {menuData.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;