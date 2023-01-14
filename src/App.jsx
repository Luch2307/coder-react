import "./App.css";
import Cart from "./componentes/Cart";
import Navbar from "./componentes/Navbar.jsx";
import ItemListContainer from "./componentes/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Error404 from "./componentes/Error404";
import CartContexProvider from "./componentes/CartContext";
import Checkout from "./componentes/Checkout";


function App() {

  return (
    <div className="container">
      <CartContexProvider >
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route
                path={"/"}
                element={<ItemListContainer />}
              />
              <Route
                path={"/category/:categoria"}
                element={<ItemListContainer />}
              />
              <Route
                path={"/item/:id"}
                element={<ItemDetailContainer  />}
              />
              <Route path={"/Cart"} element={<Cart/>} />
              <Route path={"*"} element={<Error404 />} />  <Route
                path={"/Checkout"}
                element={<Checkout/>}
              />
            </Routes>
        </BrowserRouter>
      </CartContexProvider>
    </div>
  );
}

export default App;
