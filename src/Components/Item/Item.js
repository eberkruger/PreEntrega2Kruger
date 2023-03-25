import '../../Styles/styles.scss'

const Item = ({ nombre, descripcion, img, precio }) => {
    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
        </div>
    )
}

export default Item