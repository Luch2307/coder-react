import { useState, useEffect } from "react";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { createContext } from "react";


export const CartContext = createContext();

const CartContexProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const cartQty = cartProducts.reduce((acc, curr) => acc + curr.qty, 0 )
    const totalCarrito = () => {
      return cartProducts.reduce((acc, curr) => acc +curr.qty * curr.precio, 0)
    }
    const clearCart = () => (setCartProducts([]))
    const removeItem = (id) => {
    const updatedList = cartProducts.filter((item) => item.id !== id);
    setCartProducts(updatedList);
  };
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });


  }, []);
  
  return (
    <CartContext.Provider
      value={{ items, setItems, cartProducts, setCartProducts, cartQty, clearCart, removeItem, totalCarrito}}
    >
      {children}
    </CartContext.Provider>
  );
};
 
export default CartContexProvider;