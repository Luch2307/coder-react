import React from "react";
import Facebook from '../public/imagenes/facebook-icon.svg'
import Instagram from '../public/imagenes/intagram-icon.svg'



function Footer (){
    return(
<div classNameName="container">
    <div classNameName="footer">
        <div className="redes-footer">
            <h3>Contactanos</h3>
            <div className="logo-redes-footer">
            <a href="facebook.com">
                    <img classNameName={"svg-redes"} src={Facebook} alt="facebook-icon"/>
                </a>
                <a href="instagram.com">
                    <img className={"svg-redes"} src={Instagram }alt="instagram-icon"/>
                </a>
            </div>
            <a className="mail" href="/mail">naturalgreenburg@gmail.com</a>

        </div>
        <div className="footer-links">
            <ul>
                <li><a href="/entrega">Zonas de entrega</a></li>
                <li><a href="/precio">Precios y Productos</a></li>
                <li><a href="/membresia">Hacete miembro de nuestra Comunidad</a></li>
                <li><a href="/eco">Eco-world, se parte de un mundo sustentable</a></li>
                <li><a href="/entrega">Zonas de entrega</a></li>
            </ul>
        </div>
    </div>
    </div>
)
}

export default Footer