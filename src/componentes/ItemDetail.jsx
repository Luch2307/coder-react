import React from "react";


const ItemDetail = ({item}) =>{
    console.log(item);
    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <img src={item.imagen} alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <span><b>${item.precio}</b></span>
            </div>
        </div>
    )
}

export default ItemDetail