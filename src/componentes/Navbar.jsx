import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg w-100">
        <div className="row w-100">
          <div className="col-md-6">
            <div className="container-fluid d-flex">
              <Link className="navbar-brand" to={"/"}>
                <img
                  src="/imagenes/logo.png"
                  width={100}
                  alt="logo de natural"
                />
              </Link>

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
                    <NavLink className="nav-link" to={"/category/panes"}>
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
          </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              <CartWidget />
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
              </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
