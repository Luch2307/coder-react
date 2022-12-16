import React from "react";
import { useState } from "react";

const ItemsCount = ({ stockItems, setCartQty }) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStock] = useState(stockItems);

  const incrementarStock = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrementarStock = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const onAdd = () => {
    if (stock > 0 && counter <= stock) {
      const resetNumber = stock - counter ? 1 : 0;
      setStock(stock - counter);
      setCartQty(prev => prev+counter)
      setCounter(resetNumber);
      console.log("Agregaste" + counter + "porductos al carrito");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-between gap-2">
      <div>
        <div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={decrementarStock}
            >
              -
            </button>
            <button type="button" className="btn btn-outline-primary">
              {counter}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={incrementarStock}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <button className="btn btn-outline-primary" onClick={onAdd}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCount;
