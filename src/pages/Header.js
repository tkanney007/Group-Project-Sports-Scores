import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <Link to="/logo">Play Logo Game</Link> |{" "}
        <Link to="/player">Name That Player Game</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default Header;
