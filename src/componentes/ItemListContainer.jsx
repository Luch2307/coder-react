import React from "react";
import { useEffect, useState  } from "react";
import ItemsCount from "./ItemsCount";
import ItemList from "./itemList";
import arrayProductos from "./arrayProductos.json"

const ItemListContainer = () =>{
    const [items, setItems]= useState([])

    useEffect(() =>{
        const promesa =new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(arrayProductos)
            })
        });
        promesa.then((data)=>{
            setItems(data);
        })
    },[]);
    
    return(
        <div className="container py-5">
                    <div className="alert alert-danger" role="alert">
                        <ItemList items={items}/>
                    < ItemsCount stockItems={10}/>
            </div>
        </div>
    )
}

export default ItemListContainer