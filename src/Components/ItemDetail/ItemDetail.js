import '../../Styles/styles.scss'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ id, nombre, imgUrl, categoria, detalles, precio, stock}) => {

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, nombre, precio, quantity
        }
        addItem(productToAdd)
    }

    return (
        <div className='cardDetail'>
            <div className='cardDetailLeft'>
                <img src={imgUrl} alt={nombre} className="cardDetailImg"/>
                <ItemCount onAdd={handleOnAdd} stock={stock}/>
            </div>
            <div className='cardDetailRight'>
                <h3 className='cardDetailTitle'>{nombre}</h3>
                <p className='cardDetailCategory'><span>Categoría:</span> {categoria}</p>
                <p className='cardDetailPrice'><span>Precio:</span> USD{precio}</p>
                <p className='cardDetailInfo'><span>Detalles:</span> {detalles}</p>
            </div>
        </div>
    )
}

export default ItemDetail