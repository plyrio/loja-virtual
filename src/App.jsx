import {Outlet} from "react-router-dom";
import './App.css';
import Navitens from "./components/Navitens";
import Footer from "./components/Footer";

export default function App() {

  return (
    <>
      <Navitens />
      <Outlet />
      <Footer />
    </>
  );
}

