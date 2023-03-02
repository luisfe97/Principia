import "../styles/globals.css";
import "../styles/style.scss";
import { useEffect } from "react";
import Script from "next/script";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PureCounter from "../components/PureCounter.js";
import { Mainjs } from "../components/Main";
import {Bootstrap} from "../components/bootstrap.js"
import $ from "jquery";
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    PureCounter();
    Mainjs();
  }, []);
  return (
    <>
    <NextUIProvider>
      <Component {...pageProps}>
        <Script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        ></Script>
      </Component>
      </NextUIProvider>

    </>
  );
}

export default MyApp;
