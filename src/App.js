import './Styles/styles.scss';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenido a la tienda'} />
    </div>
  );
}

export default App;
