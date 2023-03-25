import '../../Styles/styles.scss'
import cartSvg from './assets/cart.svg'
import { useState } from 'react'

const CartWidget = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }
    
    return (
        <div className='navCarrito'>
            <a href='##' onClick={increment}><img src={cartSvg} alt='Cart'/></a>
            <small>{count}</small>
        </div>
    )
}

export default CartWidget