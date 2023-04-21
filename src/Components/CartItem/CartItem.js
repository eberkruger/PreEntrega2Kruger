import '../../Styles/styles.scss'
import { useCart } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { VaciarCarrito } from '../../Notification/NotificationService'
import { EliminarProducto } from '../../Notification/NotificationService'
import trashSvg from './assets/trash-regular.png'

const CartItem = () => {

    const { cart, removeItem, totalQuantity, total, clearCart } = useCart()
    
    if(!totalQuantity){
        return(
            <div className='emptyCart'>
                <h2>Carrito Vacio</h2>
                <Link to='/' className='emptyCartLink'>Seguir Comprando</Link>
            </div>
        )
    }

    return (
        <div className='cartContainer'>
            <h2 className='cartContainerTitle'>Carrito de Compras</h2>
            {
                cart.map((prod) => {
                    return (
                        <>
                        <div key={prod.id} className="cartItem">
                            <img src={prod.imgUrl} alt={prod.nombre}/>
                            <div className='cartItemName'>
                                <small>Producto</small>
                                <h3>{prod.nombre}</h3>
                            </div>
                            <div className='cartItemQuantity'>
                                <small>Cantidad</small>
                                <p><span>{prod.quantity}</span></p>
                            </div>
                            <div className='cartItemPrice'>
                                <small>Precio</small>
                                <p>USD<span>{prod.precio}</span></p>
                            </div>
                            <div className='cartItemTotal'>
                                <small>Subtotal</small>
                                <p>USD<span>{prod.quantity * prod.precio}</span></p>
                            </div>
                            <button onClick={() => {removeItem(prod.id); EliminarProducto()}}><img src={trashSvg} alt='Trash' /></button>
                        </div>
                        <div className='linea'></div>
                        </>
                    )
                })
            }

            <div className='cartAction'>
                <button onClick={()=>{clearCart(); VaciarCarrito()}}>Vaciar Carrito</button>
                <div className='cartActionRight'>
                    <p className='cartActionTotal'>Total: USD<span>{total}</span></p>
                    <Link to='/checkout' className='cartActionCheckout'>Finalizar Compra</Link>
                </div>
            </div>
        </div>
    )
}

export default CartItem