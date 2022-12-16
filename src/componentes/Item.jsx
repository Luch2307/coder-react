import React from "react";
import ItemsCount from "./ItemsCount";
import { Link } from "react-router-dom";



const Item = ({ item,setCartQty }) => {
  return (
    <div className="card">
        <Link to={`/item/${item.id}`} className="text-decoration-none">
        <img src={item.imagen} className="card-img-top" alt={item.nombre} />
    </Link>
        <div className="card-body w-100 d-flex align-items-center justify-content-between">
          <div>
            <p className="card-text text-primary">{item.nombre}</p>
            <span className="card-price text-primary">${item.precio}</span>
          </div>
          <ItemsCount stockItems={item.stock} setCartQty={setCartQty}/>
        </div>
      </div>
  );
};

export default Item;
