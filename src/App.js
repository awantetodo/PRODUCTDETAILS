import logo from './logo.svg';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App(){
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer MENSAJE="Catalogo"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
