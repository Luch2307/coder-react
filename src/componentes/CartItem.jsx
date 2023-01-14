import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItems = () => {
  const { items } = useContext(CartContext);
  return (
    <>
      {items.map((item) => (
        <div className="Container">
          <img size="tiny" src={item.imagen} alt={item.descripcion} />
          <content verticalAlign="middle">
            <header>{item.nombre}</header>
            <div className="quanity-group">
              <button negative className="quan-buttons">
                <span name="minus" />
              </button>
              <input className="input-quanity" value={item.qty} />
              <button positive className="quan-buttons">
                <icon name="plus" />
              </button>
            </div>
            <extra className="item-total">
              <header floated="right">${}</header>
            </extra>
          </content>
        </div>
      ))}
    </>
  );
};
export default CartItems;
