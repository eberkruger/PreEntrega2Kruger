import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Hero from '../Hero/Hero'
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
        <div>
            <div className='hero'>
                <Hero greeting={'Tienda OnLine de Tecnología'} /> 
            </div>
            <div className='cardContainer'>
                <ItemList productos={productos} />
            </div>
        </div>
    )
}

export default ItemListContainer