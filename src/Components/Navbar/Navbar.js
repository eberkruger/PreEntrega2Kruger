import '../../Styles/styles.scss'
import { Link } from 'react-router-dom'
import FilterButtons from '../FilterButtons/FilterButtons'
import CartWidget from '../CartWidget/CartWidget'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = () => {
    return (
        <nav className='navBar'>
            <div className="logo">
                <Link to='/' className='logoTitle'><h1>TechZone</h1></Link>
            </div>

            <div id='navFiltros' className='navFiltros'>
                <ul>
                    <li>
                        <Link to='/category/Smartphones' className='linkNavbar'><FilterButtons label='Smartphones'/></Link>
                    </li>
                    <li>
                        <Link to='/category/Portátiles' className='linkNavbar'><FilterButtons label='Portátiles'/></Link>
                    </li>
                    <li>
                        <Link to='/category/Tabletas' className='linkNavbar'><FilterButtons label='Tabletas'/></Link>
                    </li>
                    <li>
                        <Link to='/category/Auriculares' className='linkNavbar'><FilterButtons label='Auriculares'/></Link>
                    </li>
                    <li>
                        <Link to='/category/Televisores' className='linkNavbar'><FilterButtons label='Televisores'/></Link>
                    </li>
                </ul>
            </div>

            <div className='navAcciones'>
                <SearchBar />
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar