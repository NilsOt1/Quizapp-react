import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/bookmarks">Bookmarks</NavLink>
      <NavLink to="/form">Form</NavLink>
      <NavLink to="/profil">Profil</NavLink>
    </nav>
  );
}
