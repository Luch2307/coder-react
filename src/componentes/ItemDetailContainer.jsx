import React from "react";
import arrayProductos from "./arrayProductos.json"
import { useEffect, useState  } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const {id} = useParams()
    const [item,setItem] = useState({});
    useEffect(()=>{
        const promesa = new Promise((resolve) => { 
            setTimeout(() =>{
                resolve(arrayProductos.find(item => item.id=== parseInt(id)));
            }, 1000);
        });
        promesa.then((data)=>{
            setItem(data);
        }) 
    }, [id])

    return(
        <div className="Container">
            {!!item.categoria && <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;