import {Outlet} from "react-router-dom";
import './App.css';
import Navitens from "./components/Navitens";

export default function App() {

  return (
    <>
      <Navitens />
      <Outlet />
    </>
  );
}

