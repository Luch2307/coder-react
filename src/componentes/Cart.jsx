import React from "react";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonCounter from "./ButtonCounter";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartProducts, clearCart, removeItem, setCartProducts, totalCarrito } =
    useContext(CartContext);
  // const cartRender = () => {
  //   if (cartProducts.leght === 0)
  //  {
  //   return ("El carrito esta vacio")};
  //   return(cartProducts);
  // }
  const handleQty = (item, counter) => {
    const updateQty = cartProducts.map((el) => {
      if (el.id === item.id) {
        return { ...el, qty: counter };
      }
      return el;
    });
    setCartProducts(updateQty);
  };
  return (
    <div>
      <h1>Cart</h1>
      {!!cartProducts.length ? (
        <>
          <div className="w-100">
            {cartProducts.map((item) => (
              <Row
                key={item.id}
                className="w-100 pb-3 pt-3 border-1 border-bottom"
              >
                <Col sm={6} className="d-flex gap-2">
                  <img src={item.imagen} alt="img" width="65px" />
                  <div className="align-self-center">{item.nombre}</div>
                </Col>
                <Col sm={3} className="align-items-center">
                  <ButtonCounter
                    initialCounter={item.qty}
                    item={item}
                    stockItem={item.stock}
                    handleQty={handleQty}
                    withoutButton
                  />
                </Col>
                <Col
                  sm={3}
                  className="d-flex align-items-center justify-content-end"
                >
                  <div className="align-self-center p-3">
                    ${item.precio * item.qty}
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => removeItem(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </Col>
              </Row>
            ))}
          </div>
          <Row
            sm={4}
            className="d-flex  aling-content-center justify-content-end"
          > <div className="d-flex  aling-content-center">
             <button
                type="button"
                className="btn btn-outline-primary mt-2 "
                onClick={() => clearCart([])}
              >
                Vaciar carrito
              </button>
          </div>
              <span className="align-self-center p-3">Total ${totalCarrito()}</span> 
              <Link className="btn bg-white" title="Finalizar compra " to={"/Checkout"}><button type="button"
                className="btn btn-outline-primary mt-2 "> Finalizar compra</button>
         
        </Link>
          </Row>  
        
        </>
      ) : (
        <Link className="nav-link active" aria-current="page" to={"/"}>
          No tienes productos en el carrito
        </Link>
      )}
    </div>
  );
};
export default Cart;
