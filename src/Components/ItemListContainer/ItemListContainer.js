import { useEffect, useState } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../Services/Firebase/firebaseConfig'
import { useParams } from 'react-router-dom'
import RiseLoader from 'react-spinners/RiseLoader'
import ItemList from '../ItemList/ItemList'
import Hero from '../Hero/Hero'
import '../../Styles/styles.scss'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsRef = categoryId
            ? query(collection(db, 'products'), where('categoria', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot => {
                const productsAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProductos(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return (
            <div className='spinner'>
                <RiseLoader
                color="#36cdd6"
                margin={5}
                size={15}
                speedMultiplier={2}
                />
            </div>
        )
    }

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