import React from 'react';
import Logo from '../imagenes/logo.png'

function Navbar() {
  return(
  <div className="container">
    <div className="row">
      <div className="col-md-12">
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={Logo} width={100} borderRadius={10} alt="logo de natural"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nuestros Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sobre Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Contactanos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  </div>
  );
}

export default Navbar;