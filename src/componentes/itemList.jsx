import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return(
        <div className="row">
        {
            items.map(item =>
                <div className="col" key={item}>
                <Item item={item.id}/></div>
                )
            }
    </div>
    )
}

export default ItemList