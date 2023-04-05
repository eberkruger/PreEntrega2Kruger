import '../../Styles/styles.scss'
import cartSvg from './assets/cart.svg'
import { useCart } from '../../Context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    const { totalQuantity } = useCart()

    return (
        <div className='navCarrito'>
            <Link to={'/cart'}><img src={cartSvg} alt='Cart' /></Link>
            <small>{totalQuantity}</small>
        </div>
    )
}

export default CartWidget