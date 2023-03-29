import './Styles/styles.scss';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter >
            <Navbar />
            <Hero greeting={'Tienda OnLine de Tecnología'} greeting2={'Descubre la tecnología que cambiará tu vida'} />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
