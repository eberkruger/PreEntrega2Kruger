import '../../Styles/styles.scss'
import { useState } from 'react'
import { AgregarAlCarrito } from '../../Notification/NotificationService'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)
    
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='counter'>
            <div className='controls'>
                <button className='controlsButton' onClick={decrement}><span>-</span></button>
                <p className='controlsNumber'>{quantity}</p>
                <button className='controlsButton' onClick={increment}><span>+</span></button>
            </div>
            <div className='cartAddContainer'>
                <button className='cartAdd' onClick={() => {AgregarAlCarrito(); onAdd(quantity)}}>Agregar al carrito</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ItemCount