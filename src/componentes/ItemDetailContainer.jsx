import React from "react";
import arrayProductos from "./arrayProductos.json"
import { useEffect, useState  } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () =>{
    const [item,setItem] = useState({});
    useEffect(()=>{
        const promesa = new Promise((resolve) => { 
            setTimeout(() =>{
                resolve(arrayProductos.find(item => item.id===1));
            }, 2000);
        });
        promesa.then((data)=>{
            setItem(data);
        }) 
    }, [])
    return(
        <div className="Container">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;