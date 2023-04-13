import '../../Styles/styles.scss'
import { useCart } from '../../Context/CartContext'

const CartItem = () => {

    const { cart, removeItem } = useCart()

    return (
        <div className='cartContainer'>
            <h2 className='cartContainerTitle'>Carrito de Compras</h2>
            {
                cart.map((prod) => {
                    return (
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
                            <button onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartItem