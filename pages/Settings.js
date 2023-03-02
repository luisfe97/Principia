import Image from "next/image";
import Container from "../components/Container";
import Head from "next/head";
import Iconos from "../components/Iconos";
import Link from "next/link";

export default function Settings() {
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
            <div className="row mb-3">
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
            <div className="row perfil-container">
              <div className=" mt-5">
                <h2>ACTUALIZA TU PERFIL</h2>
                <div className="edit-perfil">
                  <img
                    src="https://github.com/mdo.png"
                    alt=""
                    width="150"
                    height="150"
                    className="rounded-circle me-2"
                  />
                  <form className="edit-form">
                    <div className="row">
                      <div className="row ">
                        <p className="mt-2 mb-1">CORREO</p>
                      </div>
                      <div className="row">
                        <input
                          type="text"
                          className=""
                          aria-label="buscar"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="row">
                        <p className="mt-2 mb-1">NOMBRE</p>
                      </div>
                      <div className="row">
                        <input
                          type="text"
                          className=""
                          aria-label="buscar"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="row">
                        <p className="mt-2 mb-1">APELLIDO</p>
                      </div>
                      <div className="row">
                        <input
                          type="text"
                          className=""
                          aria-label="buscar"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>
                    <div className="row mt-2 pr-5">
                    <label>
                      <input type="radio" name="radio" />
                      Acepto los terminos y condiciones
                    </label>
                    </div>

                    <div className="row mt-4">
                      <button type="submit" className="guardar">
                        GUARDAR
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
