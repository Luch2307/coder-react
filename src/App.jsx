import './App.css';
import Navbar from './componentes/Navbar.jsx'
import ItemListContainer from './componentes/ItemListContainer';
import './index.css'
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
