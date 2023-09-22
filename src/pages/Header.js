import { Link, Outlet } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <nav id="headerBody">
        <header id="title1">NFL Guesser</header>
        <Link className="gaemLinks" to="/logo">
          Play Logo Game
        </Link>{" "}
        |{" "}
        <Link className="gaemLinks" to="/player">
          Name That Player Game
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
export default Header;
