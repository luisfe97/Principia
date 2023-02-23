import { Button } from "bootstrap";
import HeaderMarket from "./HeaderMarket";
import Sidebar from "./Sidebar";

const Container = (props) => {
    return(  <>
    
        <HeaderMarket />
        <div className="container-section d-flex">
          <Sidebar />
          {props.children}
        </div>
        <footer id="footer" className="d-flex justify-content-around text-center text-lg-start">
        {/* Copyright */}
        <div className="text-center p-3">
          © 2023 PRINCIPIA
        </div>
        <div className="text-center p-3">
          <button className="fbutton">¿NECESITAS AYUDA? <i class="bi bi-chat-dots"></i></button>
        </div>
        {/* Copyright */}
      </footer>

      </>)

};

export default Container;
