import React from "react";
import ButtonCounter from "./ButtonCounter";





// const ItemDetail = ({item}) =>{

 const ItemDetail = ({item}) => {
    return (
      <div className="card"  style={{"max-width": "600px;"}}>
              <p className="card-text text-primary justify-self-center">{item.nombre}</p>
          <img src={item.imagen} className="card-img-small"  alt={item.nombre} />
          <div className="card-body w-100 d-flex align-item-center justify-content-between"> 
                <span>{item.descripcion}</span>
            <div>
              <span className="card-price ">Precio ${item.precio}</span>
            </div>
            <ButtonCounter stockItem={item.stock} item={item}/>
          </div>
        </div>
    );
  };

//     }
//     return (
//         <div className="row">
//             <div className="col-md-12 d-flex align-content-center justify-conten-center">
//                 <h1>{item.nombre}</h1>
//                 <img src={item.imagen} className="img-fluid m-3" width="400px" alt={item.nombre} />
//                 <p>{item.descripcion}</p>
//                 <span><b>${item.precio}</b></span>
//                 <ButtonCounter stockItems={item.stock} onAdd={onAdd}/>
//             </div>
//         </div>
//     )
// }

export default ItemDetail