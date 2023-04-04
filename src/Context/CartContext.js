import { createContext, useState } from 'react';

export const Context = createContext('Valor Inicial')

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.log("no se agrega porque ya esta")
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return (
        <Context.Provider value={{ cart, addItem }}>
            {children}
        </Context.Provider>
    )
}