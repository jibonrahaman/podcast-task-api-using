import { Outlet } from "react-router-dom";
import WithOutLogged from "../Pages/WithOutLogged";

export default function Outlets() {
  return (
    <div className=" flex">
      <WithOutLogged />
      <Outlet />
    </div>
  )
}
