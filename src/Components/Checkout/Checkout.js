import ContactForm from "../ContactForm/ContactForm"
import { useCart } from "../../Context/CartContext"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../Services/Firebase/firebaseConfig"
import { useState } from "react"
import RiseLoader from "react-spinners/RiseLoader"
import { OrdenGenerada } from "../../Notification/NotificationService"
import { useNavigate } from "react-router-dom"
import '../../Styles/styles.scss'

const Checkout = () => {

    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const {cart, total, clearCart} = useCart()
    const navigate = useNavigate()

    const createOrder = async () => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: 'Eber Kruger',
                    phone: '2614175784',
                    email: 'eberkruger@hotmail.com.ar'
                },
                items: cart,
                total
            }
    
            // obtengo los ids de los productos.
            const ids = cart.map(prod => prod.id)
            // creo la referencia y le pongo la condición para traer documentos de una colección.
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            // de la respuesta de getDocs traigo los documentos (docs).
            const {docs} = await getDocs(productsRef)
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const ordersRef = collection(db, 'orders')
                const orderAdded = await addDoc(ordersRef, objOrder)

                clearCart()
                OrdenGenerada()
                setOrderId(orderAdded.id)

                setTimeout(() => {
                    navigate('/')
                }, 8000);

            } else {
                console.log('Error, hay productos que no tienen stock')
            }
        } catch (error) {
            console.log('Error, hubo un error generando la orden')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return(
            <div className='spinner'>
                <h3>Generando Orden</h3>
                <RiseLoader
                color="#0A4D68"
                margin={5}
                size={15}
                speedMultiplier={2}
                />
            </div>
        )
    }

    if(orderId) {
        return (
            <div className="shopOrderId">
                <h3>El ID de su compra es {orderId}</h3>
            </div>
        )
    }

    return (
        <div className="shopDataOrder">
            <h2>Finalizar compra</h2>
            <h3>Ingrese sus datos</h3>
            <ContactForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout