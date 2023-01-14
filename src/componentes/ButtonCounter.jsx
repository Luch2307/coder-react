import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./CartContext";

const ButtonCounter = ({
  stockItem,
  item,
  initialCounter = 1,
  withoutButton,
  handleQty
}) => {
  const [counter, setCounter] = useState(initialCounter);
  const [stock, setStock] = useState(stockItem);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const incrementarStock = () => {
      if (counter < stock) {
        setCounter(counter + 1);
        if (handleQty){
            handleQty(item,counter+1) 
        }
      }
  };

  const decrementarStock = () => {
      if (counter > 1) {
        setCounter(counter - 1);
        if (handleQty){
            handleQty(item,counter-1) 
        }
      }
  };
  const onAdd = () => {
    if (stock > 0 && counter <= stock) {
      const resetNumber = stock - counter ? 1 : 0;
      setStock(stock - counter);
      // localStorage.setItem("cartQty" , cartQty + counter)
      const updatedCart = cartProducts.find((product) => product.id === item.id)
        ? cartProducts.map((el) => {
            if (el.id === item.id) {
              return { ...el, qty: (el.qty += counter) };
            }
            return el;
          })
        : [...cartProducts, { ...item, qty: counter }];
      setCartProducts(updatedCart);
      setCounter(resetNumber);
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-between gap-2">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => decrementarStock()}
        >
          -
        </button>
        <button type="button" className="btn btn-outline-primary">
          {counter}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => incrementarStock()}
        >
          +
        </button>
      </div>
      {withoutButton || (
        <div>
          <button className="btn btn-outline-primary" onClick={onAdd}>
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonCounter;
