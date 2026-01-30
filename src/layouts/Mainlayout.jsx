import { Outlet } from "react-router-dom";
import Header from "../Components/header/Header";
import Footar from "../Components/footar/Footar";

export default function Mainlayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footar />
    </>
  )
}
