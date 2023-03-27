import './Styles/styles.scss';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero greeting={'Tienda OnLine de Tecnología'} greeting2={'Descubre la tecnología que cambiará tu vida'} />
        <ItemListContainer />
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
