import '../../Styles/styles.scss'

const Item = ({ nombre, descripcion, imgUrl, precio }) => {
    return (
        <div className='cardContainer'>
            <h3>{nombre}</h3>
            <img src={imgUrl} alt={nombre} />
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
        </div>
    )
}

export default Item