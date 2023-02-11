import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <h1>LOGO</h1>
        
      <h1>| Events</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/previousevents">
                Previous Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
