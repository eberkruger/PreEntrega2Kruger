import '../../Styles/styles.scss'
import cartSvg from './assets/cart.svg'

const Item = ({ nombre, descripcion, imgUrl, precio }) => {
    return (
        <div className='card'>
            <h3>{nombre}</h3>
            <img src={imgUrl} alt={nombre} />
            <p>{descripcion}</p>
            <p>Precio: USD{precio}</p>
            <button><img src={cartSvg} alt={'Carrito de compras'} /></button>
        </div>
    )
}

export default Item