
import { useState } from "react";
import ItemList from "./ItemList";




const ItemListContainer = () => {
    const [items] = useState([]);
    return(
        <div className="container py-5">
                    <div className="alert alert-danger" role="alert">
                        <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer