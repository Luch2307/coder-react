import React from "react";



const CartWidget = () =>{
    return(
        <button type="button" className="btn btn-primary position-relative">
                <img src="/imagenes/cart3.svg" alt={"carrito"} width={32} className="carrito" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
        <span className="visually-hidden">
        </span>
    </span>
</button>
    )
}

export default CartWidget;