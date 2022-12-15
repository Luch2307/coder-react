import React from "react";
import ItemsCount from "./ItemsCount";

const Item = ({ item }) => {
  return (
    <div className="card">
      <img src={item.imagen} className="card-img-top" alt={item.nombre} />
      <div className="card-body w-100 d-flex align-items-center justify-content-between">
        <div>
          <p className="card-text">{item.nombre}</p>
          <span className="card-price">${item.precio}</span>
        </div>
        <ItemsCount stockItems={item.stock} />
      </div>
    </div>
  );
};

export default Item;
