import React from "react";
import './index.css'


const Item = ({item}) => {
    return(
        <div classNameName="card" >
        <img src={item.imagen} className="card-img-top" color="black"  alt={item.nombre}/>
        <div className="card-body">
            <p className="card-text" color="black" >{item.nombre}</p>
            </div>
        </div>
    )
}

export default Item