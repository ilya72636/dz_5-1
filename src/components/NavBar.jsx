import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">написать пост</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Посты</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;