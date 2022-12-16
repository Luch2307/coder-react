import './App.css';
import Navbar from './componentes/Navbar.jsx'
import ItemListContainer from './componentes/ItemListContainer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './index.css'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Error404 from './componentes/Error404'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path={"/"} element={<ItemListContainer/>}/>        
      <Route path={"/category/:categoria"} element={<ItemListContainer/>}/>        
      <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
      <Route path={"*"} element={<Error404/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
