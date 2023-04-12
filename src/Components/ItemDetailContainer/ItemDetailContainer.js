import '../../Styles/styles.scss'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../Services/Firebase/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [productos, setProductos] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect (() => {
        setLoading(true)

        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot => {
                console.log(snapshot)
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProductos(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return (
            <div>
                <p>Cargando...</p>
            </div>
        )
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...productos} />
        </div>
    )
}
export default ItemDetailContainer