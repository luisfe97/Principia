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
            fgdfgdf
          </div>
        </section>
      </Container>
    </>
  );
}
