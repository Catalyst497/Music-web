import Nav from "./utilities/Nav";
import Player from "./utilities/Player";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Player />
    </>
  );
}
