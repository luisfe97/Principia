import Link from "next/link";

export default function Header() {
  return (
    <>
      <header id="header" className=" ">
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body"></div>
        </div>

        <div className="container d-flex align-items-center justify-content-between">
          <h2 className="logo">TOKENFLOW</h2>
          <nav className="navbar">
            <div className="container-fluid d-flex justify-content-between">
              <button className="hbuton" type="button">
                LOG IN
              </button>
              <button className="hbuton" type="button">
                REGISTRATE
              </button>
              <button
                className="menu-bar"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
