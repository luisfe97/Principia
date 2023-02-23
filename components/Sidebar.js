import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div id="sidebar-container">
        <ul className="menu navbar-nav ">
          <div className=" align-items-center mt-5 justify-content-center">
            <li className="nav-link">
              <a href="#1">
                <i className="bi bi-grid-3x3-gap d-block"></i>
              </a>
            </li>
            <li className="nav-link"> 
              <a href="#2">
                <i className="bi bi-file-bar-graph d-block "></i>
              </a>
            </li>
            <li className="nav-link"> 
              <a href="#3">
                <i className="bi bi-info-square d-block"></i>
              </a>
            </li>
            <li className="nav-link">
              <a href="#4">
                <i className="bi bi-calendar-check d-block"></i>
              </a>
            </li>
            <li className="nav-link">
              <a href="#5">
                <i className="bi bi-gear d-block"></i>
              </a>
            </li>
          </div>
          <div className="mb-5">
            <a href="#6">
              <i className="bi bi-box-arrow-in-right d-block"></i>
            </a>
          </div>
        </ul>
      </div>
    </>
  );
}
