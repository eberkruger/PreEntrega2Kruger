import '../../Styles/styles.scss'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [productos, setProductos] = useState()

    const { itemId } = useParams()

    useEffect (() => {
        getProductsById(itemId)
            .then(response => {
                setProductos(response)
            }).catch(error => {
                console.log(error)
            })
    }, [itemId])

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...productos} />
        </div>
    )
}
export default ItemDetailContainer