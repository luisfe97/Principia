import Image from "next/image";
import Container from "../components/Container";
import Head from "next/head";
import Iconos from "../components/Iconos";

export default function Market() {
  return (
    <>
      <Head>
        <title>Principia</title>
        <meta name="description" content="Principia MarketPlace" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Iconos />

      {/*-------------hero--------------------*/}
      <Container>
        <section id="market">
          <div className="container-market">
            <div className="row">
              <div className="filtros">
                <div className="row">
                  <div className="col-lg-2 ml-4">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                       <span> MOSTRAR ESTADO</span>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 ml-4">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span>ORDENAR POR</span>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 ml-4">
                    <div className="input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="bi bi-search"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="BUSCAR"
                        aria-label="buscar"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex container-img mt-5">
              <div className="col-lg-4 col-md-5 col-sm-5 mb-3">
                <Image
                  src={"/./static/carru.PNG"}
                  alt="Sunset"
                  width={200}
                  height={100}
                  className={"img"}
                />
              </div>
              <div className="col-lg-4 col-md-5 col-sm-5 mb-3">
                <Image
                  src={"/./static/carru.PNG"}
                  alt="Sunset"
                  width={200}
                  height={100}
                  className={"img"}
                />
              </div>
              <div className="col-lg-4 col-md-5 col-sm-5 mb-3">
                <Image
                  src={"/./static/carru.PNG"}
                  alt="Sunset"
                  width={200}
                  height={100}
                  className={"img"}
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
