import '../../Styles/styles.scss'
import { getProducts } from '../../asyncMock'
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
            .then(products => {
                setProductos(products)
            })
    }, [])
    console.log(productos)
    return (
        <div className='detailContainer'>
            <ItemDetail productos={productos} />
        </div>
    )
}
export default ItemDetailContainer