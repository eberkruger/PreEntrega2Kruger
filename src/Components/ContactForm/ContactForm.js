import { useState } from "react"
import '../../Styles/styles.scss'

const ContactForm = ({onConfirm}) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = () => {
        const userData = {
            name, phone, email, address
        }

        onConfirm(userData)
    }

    return(
        <form onSubmit={handleSubmit} className="shopForm">
            <h3>Ingrese sus Datos</h3>
            <input className="shopName" type='text' placeholder='Nombre completo'  value={name} onChange={(e) => setName(e.target.value)} required/>
            <input className="shopPhone" type='number' placeholder='Celular' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
            <input className="shopEmail" type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input className="shopAddress" type='text' placeholder='Dirección' value={address} onChange={(e) => setAddress(e.target.value)} required/>
            <button>Generar Orden</button>
        </form>
    )
}

export default ContactForm