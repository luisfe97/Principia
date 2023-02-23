import Image from "next/image";
import Header from "../components/Header";
import Head from "next/head";
import Iconos from "../components/Iconos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Principia</title>
        <meta name="description" content="Principia MarketPlace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Iconos />
      <Header />
      {/*-------------hero--------------------*/}
      <section id="hero">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-3 col-sm-6 mb-3">
            <div className=" cart1">
              <h1>INVIERTE EN PROYECTOS DESDE 100 USD DE FORMA TRANSPARENTE</h1>
              <p>
                Comienza a realizar inversiones seguras apalancadas en
                tecnologia blockchan
              </p>
              <button className="hbuton" type="button">
                REGISTRATE
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-6 slider1">
            <div className="row d-flex flex-row bd-highlight mb-3">
              <div
                id="carouselExampleCaptions"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active cart-img">
                    <img
                      src="../casas-de-lujo.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>BENEFICIOS</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item cart-img">
                    <img
                      src="../casas-de-lujo.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>BENEFICIOS2</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </button>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col col-lg-6 col-md-5 col-sm-6 slider2">
                <div
                  id="carouselExampleCaptions2"
                  className="carousel slide carousel-fade "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions2"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions2"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active cart-slider">
                      <div className="container-fluid">
                        <h5>BENEFICIOS</h5>
                        <p>
                          Invierte Desde USD 500
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item cart-slider">
                      <div className="container-fluid">
                        <h5>BENEFICIOS 2</h5>
                        <p>
                        Invierte Desde USD 500
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide="next"
                  >
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </button>
                </div>
              </div>

              <div className="col col-lg-6 col-md-5 col-sm-6">
                <div className=" cart2">
                  <h2>
                    HOLA
                    <br></br>
                    TU
                  </h2>
                  <button className="hbuton" type="button">
                LOG IN
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-------------COMO FUNCIONA--------------------*/}
      <section id="ComoFuinciona">
        <h1>¿CÓMO FUINCIONA?</h1>
        <div className="row d-flex">
          <div className="col col-lg-3 col-md-3 col-sm-3">
            <div className="row d-flex flex-row bd-highlight mb-3 ">
              <div className=" cart3">
                <h2>¿QUIERES INVERTIR?</h2>
              </div>
            </div>
            <div className=" row d-flex flex-row bd-highlight mb-3">
              <div className=" cart4">
                <h2>¿TIENES UN PROYECTO?</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-5 mb-3">
            <div className=" cart5">
              <h2>REGISTRATE</h2>
              <p>Realiza el proceso de validacion y de KYC/AML</p>
              <span>1</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-5 mb-3">
            <div className=" cart5">
              <h2>SELECCIONA</h2>
              <p>
                Escoge los tokens que deseas y realiza la compra desde tu wallet
              </p>
              <span>2</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-5 mb-3">
            <div className=" cart5">
              <h2>FIRMA</h2>
              <p>Firma el acuerdo de inversión</p>
              <span>3</span>
            </div>
          </div>
        </div>
      </section>
      {/*-------------EMPIEZA A INVERTIR--------------------*/}
      <section id="EmpiezaInvertir">
        <div className="contenedor1">
          <div className="contenido">
            <div className="row flex-nowrap">
              <div className="col col-lg-7 align-self-centeR">
                <h1>EMPIEZA A INVERTIR</h1>
              </div>
              <div className="col align-self-center">
                <button className="hbuton" type="button">
                  REGISTRATE
                </button>
              </div>
              <div className="col col-lg-7 align-self-center">
                <h1>EMPIEZA A INVERTIR</h1>
              </div>
              <div className="col align-self-center">
                <button className="hbuton" type="button">
                  REGISTRATE
                </button>
              </div>
              <div className="col col-lg-7 align-self-center">
                <h1>EMPIEZA A INVERTIR</h1>
              </div>
              <div className="col align-self-center">
                <button className="hbuton" type="button">
                  REGISTRATE
                </button>
              </div>
              <div className="col col-lg-7 align-self-center">
                <h1>EMPIEZA A INVERTIR</h1>
              </div>
              <div className="col align-self-center">
                <button className="hbuton" type="button">
                  REGISTRATE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex">
          <div className="col col-lg-6 col-md-3 col-sm-3 ">
            <div className=" texto">
              <h3>INVIERTE DE FORMA SEGURA, RENTABLE Y PRACTICA</h3>
            </div>
          </div>
          <div className="col col-lg-6 col-md-3 col-sm-3">
            <div className=" cart5">
              <ul>
                <li>haz parte de un proyecto de alto impacto desde 100 usb</li>
                <li>invierte a solo un click 24/7</li>
                <li>
                  Invierte desde cualquier lugar. Rompe las barreras fisicas de
                  inversión
                </li>
                <li>Obtienen rentabilidades trimestrales sobre tu proyecto</li>
                <li>Mayor transparencia gracias a la tecnologia Blockchain</li>
                <li>
                  Aumenta tus ingresos pasivos y aprovecha el interes compuesto
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*-------------Counter--------------------*/}
      <section id="counts" className="counts">
        <div className="container">
          <div className="row justify-content-center align-items-center counters">
            <div className="col-lg-3 col-6 text-center ">
              <span
                data-purecounter-start="0"
                data-purecounter-end="7200"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <hr></hr>
              <p>USUARIOS</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="7200"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <hr></hr>
              <p>DESARROLLADORES</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="7200"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <hr></hr>
              <p>CAPITAL</p>
            </div>
          </div>
          <div className="row ">
            <h3>¡ Bienvenido a las inversiones del futuro !</h3>
          </div>
        </div>
      </section>
      {/*-------------Proyectos--------------------*/}
      <section id="proyectos">
        <h1>PROYECTOS</h1>
        <div className="row d-flex">
          <div id="carousel">
            <div className="prevLeftSecond">
            <Image
                    src={"/static/carru.PNG"}
                    alt="Sunset"
                    width={200}
                    height={100}
                    className={'img'}
                  />
            </div>
            <div className="prev">
            <Image
                    src={"/static/carru.PNG"}
                    alt="Sunset"
                    width={200}
                    height={100}
                    className={'img'}
                  />
            </div>
            <div className="selected">
                  <Image
                    src={"/static/carru.PNG"}
                    alt="Sunset"
                    width={200}
                    height={100}
                    className={'img'}
                  />
            </div>
            <div className="next">
            <Image
                    src={"/static/carru.PNG"}
                    alt="Sunset"
                    width={200}
                    height={100}
                    className={'img'}
                  />
            </div>
            <div className="nextRightSecond">
            <Image
                    src={"/static/carru.PNG"}
                    width={200}
                    height={100}
                    className={'img'}
                  />
            </div>
          </div>
        </div>
      </section>
      {/*-------------getstarted--------------------*/}
      <section id="getstarted">
        <div className="player">
          <video
            className="video-screen"
            preload="auto"
            loop=""
            src="https://cdn.shopify.com/s/files/1/0085/0978/4182/files/SampleVideo.mp4"
            type="video/mp4"
            controls
          >
            Sorry, your browser doesnt support HTML5 video playback.
          </video>
        </div>
      </section>
      {/*-------------Preguntas--------------------*/}
      <section id="preguntas">
        <h1>¿ PREGUNTAS ?</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 align-self-center">
            <div className="container-preguntas">
              <div className="preguntas">
                <div className="container-fluid">
                  <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    ¿Cómo funciona lagalmente Principia consulting? ¿Es legal?{" "}
                    <i className="bi bi-chevron-down"></i>
                  </button>
                  <hr></hr>
                </div>
                <div className="collapse" id="navbarToggleExternalContent">
                  <div className=" p-4">
                    <span className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nisl elit, venenatis eget nibh a, ornare rhoncus
                      erat. Phasellus suscipit.
                    </span>
                  </div>
                </div>
              </div>
              <div className="preguntas">
                <div className="container-fluid">
                  <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent2"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    ¿Puedo vender mi token?{" "}
                    <i className="bi bi-chevron-down"></i>
                  </button>
                  <hr></hr>
                </div>
                <div className="collapse" id="navbarToggleExternalContent2">
                  <div className=" p-4">
                    <span className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nisl elit, venenatis eget nibh a, ornare rhoncus
                      erat. Phasellus suscipit.
                    </span>
                  </div>
                </div>
              </div>
              <div className="preguntas">
                <div className="container-fluid">
                  <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent3"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    ¿Cómo pagamos intereses/dividendos?{" "}
                    <i className="bi bi-chevron-down"></i>
                  </button>
                  <hr></hr>
                </div>
                <div className="collapse" id="navbarToggleExternalContent3">
                  <div className=" p-4">
                    <span className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nisl elit, venenatis eget nibh a, ornare rhoncus
                      erat. Phasellus suscipit.
                    </span>
                  </div>
                </div>
              </div>
              <div className="preguntas">
                <div className="container-fluid">
                  <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent4"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    ¿Cómo declarar los intereses recibidos?{" "}
                    <i className="bi bi-chevron-down"></i>
                  </button>
                  <hr></hr>
                </div>
                <div className="collapse" id="navbarToggleExternalContent4">
                  <div className=" p-4">
                    <span className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nisl elit, venenatis eget nibh a, ornare rhoncus
                      erat. Phasellus suscipit.
                    </span>
                  </div>
                </div>
              </div>
              <div className="preguntas">
                <div className="container-fluid">
                  <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent5"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    ¿Qué es Principia? <i className="bi bi-chevron-down"></i>
                  </button>
                  <hr></hr>
                </div>
                <div className="collapse" id="navbarToggleExternalContent5">
                  <div className=" p-4">
                    <span className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nisl elit, venenatis eget nibh a, ornare rhoncus
                      erat. Phasellus suscipit.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-------------Contacto--------------------*/}
      <section id="contact">
        <div className="formulario">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 align-self-center ">
              <h1>HABLEMOS</h1>
            </div>
            <div className="col-lg-8">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="TU NOMBRE..."
                      required
                    ></input>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="TU CORREO..."
                      required
                    ></input>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="2"
                    placeholder="HOLA..."
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
