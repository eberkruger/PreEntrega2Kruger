import '../../Styles/styles.scss'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../Services/Firebase/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'
import RiseLoader from 'react-spinners/RiseLoader'


const ItemDetailContainer = () => {

    const [productos, setProductos] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect (() => {
        setLoading(true)

        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot => {
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
            <div className='spinner'>
                <RiseLoader
                color="#0A4D68"
                margin={5}
                size={15}
                speedMultiplier={2}
                />
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