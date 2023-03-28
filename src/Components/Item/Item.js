import '../../Styles/styles.scss'
import { Link } from 'react-router-dom'

const Item = ({ nombre, descripcion, imgUrl, precio, id }) => {
    return (
        <div className='card'>
            <h3>{nombre}</h3>
            <img src={imgUrl} alt={nombre} />
            <p>{descripcion}</p>
            <p className='precio'>Precio: USD{precio}</p>
            <div className='cardAction'>
                <Link to={`/item/${id}`} className='option'>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item