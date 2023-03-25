import '../../Styles/styles.scss'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(productos => {
                setProducts(productos)
            })
    }, [])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer