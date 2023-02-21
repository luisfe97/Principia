import '../styles/globals.css'
import '../styles/style.scss'
import { useEffect } from "react";
import Script from "next/script";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PureCounter from '../components/PureCounter.js';
import { Mainjs } from '../components/Main';
import $ from "jquery";


function MyApp({ Component, pageProps }) {
  useEffect(() => {    
    PureCounter();
    Mainjs(); 

  }, []);
  return(<>

      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></Script>
      <Script src="https://code.jquery.com/jquery-1.11.0.min.js"></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      ></Script>
      
      
        
    </>
  )
}

export default MyApp
