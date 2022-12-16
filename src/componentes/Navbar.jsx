import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

function Navbar({cartQty}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/logo"}>
                <img
                  src="/imagenes/logo.png"
                  width={100}
                  alt="logo de natural"
                />
              </Link>
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
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/"}
                    >
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/hamburguesas"}>
                      Hamburguesas
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink  className="nav-link" to={"/category/panes"}>
                      Panes
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/snacks"}>
                      Snacks
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <CartWidget cartQty={cartQty}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
