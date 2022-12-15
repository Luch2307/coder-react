import React from "react";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <a className="navbar-brand" href="/logo">
                <img
                  src="./imagenes/logo.png"
                  width={100}
                  alt="logo de natural"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/inicio"
                    >
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/productos">
                      Nuestros Productos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/nosotros">
                      Sobre Nosotros
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contactanos">
                      Contactanos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <CartWidget />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
