import '../../Styles/styles.scss'
import { Link } from 'react-router-dom'

const Item = ({ nombre, descripcion, imgUrl, precio, id }) => {

    return (
        <div className='card'>
            <Link to={`/item/${id}`}><img src={imgUrl} alt={nombre} /></Link>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p className='precio'>Precio: USD{precio}</p>
            <div className='cardAction'>
                <Link to={`/item/${id}`} className='option'>Comprar</Link>
            </div>
        </div>
    )
}

export default Item