import React from "react";
import Item from "./Item";

const ItemList = ({items,setCartQty}) => {
    return(
        <div className="row">
        {
            items.map(item =>
                <div className="col-6 mb-2" key={item.id}>
                <Item item={item} setCartQty={setCartQty}/></div>
                )
            }
    </div>
    )
}

export default ItemList