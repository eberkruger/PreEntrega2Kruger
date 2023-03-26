import './Styles/styles.scss';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero greeting={'Bienvenido a la tienda'} greeting2={'Descubre la tecnología que cambiará tu vida'} description={'En nuestra tienda online encontrarás los mejores productos tecnológicos del mercado. Desde smartphones hasta portátiles, tabletas y televisores, todo lo que necesitas para mantenerte conectado y disfrutar de la última tecnología. Descubre nuestra selección de productos y encuentra tu próximo dispositivo favorito. ¡Haz tu pedido ahora y comienza a disfrutar!'} />
      <ItemListContainer />
    </div>
  );
}

export default App;
