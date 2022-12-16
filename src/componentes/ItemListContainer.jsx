import React from "react";
import { useEffect, useState  } from "react";
import ItemList from "./ItemList";
import arrayProductos from "./arrayProductos.json"
import { useParams } from "react-router-dom";

const ItemListContainer = ({ setCartQty }) =>{
    const [items, setItems]= useState([]);
    const{categoria} = useParams();
    useEffect(() =>{
            setItems(categoria ? arrayProductos.filter(item=>item.categoria.toLocaleLowerCase() === categoria):arrayProductos);
    },[categoria]);
    return(
        <div className="container py-5">
                    <div className="alert alert-danger" role="alert">
                        <ItemList items={items} setCartQty={setCartQty}/>
            </div>
        </div>
    )
}

export default ItemListContainer