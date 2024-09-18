import {Outlet} from "react-router-dom";
import './App.css';
import Navitens from "./components/Navitens";
import Footer from "./components/Footer";

export default function App() {

  return (
    <>
      <Navitens />
      <div className="min-vh-100">
        <Outlet />
      </div>
      
      <Footer />
    </>
  );
}

