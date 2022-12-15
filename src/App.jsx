import './App.css';
import Navbar from './componentes/Navbar.jsx'
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <ItemListContainer greeting={"no se encontaron productos"}/>
      
    </div>
  );
}

export default App;
