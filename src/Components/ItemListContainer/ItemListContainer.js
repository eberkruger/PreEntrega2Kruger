import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import '../../Styles/styles.scss'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
            .then(products => {
                setProductos(products)
            })
    }, [])

    return (
        <div className='cardContainer'>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer