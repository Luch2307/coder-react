import React from "react";
import { useEffect, useState  } from "react";
import ItemsCount from "./ItemsCount";
import ItemList from "./ItemList";
import arrayProductos from "./arrayProductos.json"

const ItemListContainer = () =>{
    const [items, setItems]= useState([])
    useEffect(() =>{
            setItems(arrayProductos);
    },[]);
    
    return(
        <div className="container py-5">
                    <div className="alert alert-danger" role="alert">
                        <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer