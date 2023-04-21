import '../../Styles/styles.scss'
import { Link } from 'react-router-dom'
import FilterButtons from '../FilterButtons/FilterButtons'
import CartWidget from '../CartWidget/CartWidget'
import SearchBar from '../SearchBar/SearchBar'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Services/Firebase/firebaseConfig'


const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        const categoriesRef = collection(db, 'categories')
        
        getDocs(categoriesRef)
            .then(snapshot => {
                const categoriesAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setCategories(categoriesAdapted)
            })
    }, [])

    return (
        <nav className='navBar'>
            <div className="logo">
                <Link to='/' className='logoTitle'><h1>TechZone</h1></Link>
            </div>

            <div id='navFiltros' className='navFiltros'>
                {
                    categories.map(cat => {
                        return (
                            <ul>
                                <li>
                                    <Link key={cat.id} to={`/category/${cat.slug}`} className='linkNavbar'><FilterButtons label={cat.label}/></Link>
                                </li>
                            </ul>
                        )
                       
                    })
                }
            </div>

            <div className='navAcciones'>
                <SearchBar />
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar