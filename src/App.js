import './Styles/styles.scss';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartView from './Components/CartView/CartView';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {

  return (
    <div className="App">
      <BrowserRouter >
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element= {<CartView />}/>
            <Route path='/checkout' element={<Checkout />}/>
          </Routes>
          <ToastContainer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
