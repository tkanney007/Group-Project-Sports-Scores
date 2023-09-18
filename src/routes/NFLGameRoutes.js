import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "../pages/Header";
import Player from "../pages/Player";
import Logo from "../pages/Logo";

const NFLGameRoutes = () => {
  const DefaultPage = () => <p>Nothing to see here!</p>;
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="logo" element={<Logo />} />
            <Route path="player" element={<Player />} />
          </Route>
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default NFLGameRoutes;
