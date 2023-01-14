import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const  {cartQty} = useContext(CartContext)
  return (
    <Link to="/Cart" className={cartQty ? "" : "pe-none"}>
      <div className="d-flex justify-content-center align-items-center ">
        <button
          type="button"
          className="btn btn-primary position-relative d-flex justify-content-center align-items-center"
          disabled={!cartQty}
        >
          <img
            src="/imagenes/cart3.svg"
            alt={"carrito"}
            width={32}
            className="pe-none"
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartQty}
            <span className="visually-hidden"></span>
          </span>
        </button>
      </div>
    </Link>
  );
};

export default CartWidget;
