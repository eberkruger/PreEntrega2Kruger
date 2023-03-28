import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import '../../Styles/styles.scss'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()
    

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProductos(products)
            })
    }, [categoryId])

    return (
        <div className='cardContainer'>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer