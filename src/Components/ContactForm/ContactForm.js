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
            <input className="shopName" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className="shopPhone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <input className="shopEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="shopAddress" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <button>Generar Orden</button>
        </form>
    )
}

export default ContactForm