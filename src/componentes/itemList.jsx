import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import Item from "./Item";


const ItemList = () => {
    const {items} = useContext(CartContext)
    const{categoria} = useParams();
    return(
        <div className="row">
        {
            items.filter(items=>items.categoria.toLowerCase()===categoria||!categoria).map(item =>
                <div className="col-6 mb-2" key={item.id}>
                <Item item={item} /></div>
                )
            }
    </div>
    )
}

export default ItemList