import '../../Styles/styles.scss'
import cartSvg from './assets/cart.svg'
import { useCart } from '../../Context/CartContext'


const CartWidget = () => {

    const { totalQuantity } = useCart()

    return (
        <div className='navCarrito'>
            <a href='##'><img src={cartSvg} alt='Cart' /></a>
            <small>{totalQuantity}</small>
        </div>
    )
}

export default CartWidget