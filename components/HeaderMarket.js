import Link from "next/link";

export default function HeaderMarket() {
  return (
    <>
      <header id="header" className=" ">

        <div className="container d-flex align-items-center justify-content-between">
          <h2 className="logo">TOKENFLOW</h2>
          <nav className="navbar">
            <div className="container-fluid d-flex justify-content-between">
              <button className="hbuton" type="button">
                LOG OUT
              </button>
              <button className="hbuton" type="button">
                WALLET
              </button>
              <a href="" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
