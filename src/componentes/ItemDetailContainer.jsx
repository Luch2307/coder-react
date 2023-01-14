import { useCallback, useState } from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { items } = useContext(CartContext);
  const [itemById, setItemById] = useState([]);
  const { id } = useParams();
  const ejecutarPromesa = useCallback(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items?.find((item) => item.id === parseInt(id)));
      }, 1000);
    });
    promesa.then((data) => {
        setItemById(data);
    });
  }, [setItemById, id, items]);

  useEffect(() => {
    ejecutarPromesa();
  }, [ejecutarPromesa]);
  return (
    <div className="Container">
      {itemById &&
        <ItemDetail item={itemById} />
      }
    </div>
  );
};

export default ItemDetailContainer;
