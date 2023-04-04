import './Styles/styles.scss';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Context = createContext('Valor Inicial')

const App = () => {
  const [cart, setCart] = useState([])
  console.log(cart)

  const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)) {
      setCart(prev => [...prev, productToAdd])
    } else {
      console.log("no se agrega porque ya esta")
    }
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  return (
    <div className="App">
      <Context.Provider value={{cart, addItem}}>
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
