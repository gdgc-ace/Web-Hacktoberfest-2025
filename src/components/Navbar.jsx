
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">Web Team</h2>
    <ul className="nav-links">
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="/members">Members</NavLink></li>
      <li><NavLink to="/guidelines">Guidelines</NavLink></li>
      <li><NavLink to="/leaderboard">LeaderBoard</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;