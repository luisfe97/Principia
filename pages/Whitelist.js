import Image from "next/image";
import Container from "../components/Container";
import Head from "next/head";
import Iconos from "../components/Iconos";
import Link from "next/link";

export default function Whitelist() {
  return (
    <>
      <Head>
        <title>Principia</title>
        <meta name="description" content="Principia MarketPlace" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"></link>
      </Head>
      <Iconos />

      {/*-------------hero--------------------*/}
      <Container>
        <section id="market">
          <div className="container-settings">
            <div className="row d-flex">
            <nav className="navbar navbar-expand-lg ">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                  <Link href="/Settings" passHref legacyBehavior>
                    <a className="nav-item nav-link active" href="#">
                      PERFIL
                    </a>
                  </Link>
                    <a className="nav-item nav-link" href="#">
                      KYC
                    </a>
                    <Link href="/Whitelist" passHref legacyBehavior>
                      <a className="nav-item nav-link" href="#">
                        WHITELIST
                      </a>
                    </Link>

                    <a className="nav-item nav-link" href="#">
                      REFERIDOS
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <div className="row whitelist-container">
              <div className=" mt-5">
                <div className="row">
                  <div className="col-lg-9">
                    <h2>REVISA TUS DIRECCIONES ASIGNADAS</h2>
                  </div>
                  <div className="col">
                    <button className="hbuton">AÑADIR WALLET</button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <p>ESTADO</p>
                  </div>
                  <div className="col">
                    <p>DIRECCION</p>
                  </div>
                  <div className="col">
                    <p>POR DEFECTO</p>
                  </div>
                  <div className="row row-container1 mb-3">
                    <div className="col success">
                      <p>WHITELISTED</p>
                    </div>
                    <div className="col">
                      <p>0xxtthiod467492xx00x789jhsuaox0</p>
                    </div>
                    <div className="col">
                      <p>SELECCIONADA</p>
                    </div>
                  </div>
                  <div className="row row-container2 mb-3">
                    <div className="col fail">
                      <p>WHITELISTED</p>
                    </div>
                    <div className="col">
                      <p>0xxtthiod467492xx00x789jhsuaox0</p>
                    </div>
                    <div className="col">
                      <p>SELECCIONADA</p>
                    </div>
                  </div>
                  <div className="row row-container1 mb-3">
                    <div className="col estado">
                      <p>WHITELISTED</p>
                    </div>
                    <div className="col">
                      <p>0xxtthiod467492xx00x789jhsuaox0</p>
                    </div>
                    <div className="col">
                      <p>SELECCIONADA</p>
                    </div>
                  </div>
                  <div className="row row-container2 mb-3">
                    <div className="col estado">
                      <p>WHITELISTED</p>
                    </div>
                    <div className="col">
                      <p>0xxtthiod467492xx00x789jhsuaox0</p>
                    </div>
                    <div className="col">
                      <p>SELECCIONADA</p>
                    </div>
                  </div>
                  <div className="row row-container1 mb-3">
                    <div className="col estado">
                      <p>WHITELISTED</p>
                    </div>
                    <div className="col">
                      <p>0xxtthiod467492xx00x789jhsuaox0</p>
                    </div>
                    <div className="col">
                      <p>SELECCIONADA</p>
                    </div>
                  </div>
                  <div className="row row-container2 mb-3">
                    <div className="col estado">
                      <p>WHITELISTED</p>
                    </div>
                    <div className="col">
                      <p>0xxtthiod467492xx00x789jhsuaox0</p>
                    </div>
                    <div className="col">
                      <p>SELECCIONADA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
