import './App.css';
import Navbar from './componentes/Navbar.jsx'
import ItemListContainer from './componentes/ItemListContainer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './index.css'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Error404 from './componentes/Error404'
import { useState } from 'react';

function App() {
   const [cartQty, setCartQty] = useState(0)
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar cartQty={cartQty}/>
      <Routes>
      <Route path={"/"} element={<ItemListContainer setCartQty={setCartQty}/>}/>        
      <Route path={"/category/:categoria"} element={<ItemListContainer setCartQty={setCartQty}/>}/>        
      <Route path={"/item/:id"} element={<ItemDetailContainer setCartQty={setCartQty}/>}/>
      <Route path={"*"} element={<Error404/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
