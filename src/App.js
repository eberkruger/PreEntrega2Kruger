import './Styles/styles.scss';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Context = createContext('Valor Inicial')

const App = () => {
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Context.Provider value={{cart, setCart}}>
        <BrowserRouter >
              <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path="/category/:categoryId" element={<ItemListContainer />}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
