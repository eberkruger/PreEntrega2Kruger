import '../../Styles/styles.scss'
import FilterButtons from '../FilterButtons/FilterButtons'
import CartWidget from '../CartWidget/CartWidget'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = () => {
    return (
        <nav className='navBar'>
            <a href='../../public/index.html' className="logo">
                <h1>TechZone</h1>
            </a>

            <div id='navFiltros' className='navFiltros'>
                <ul>
                    <li>
                        <FilterButtons label='Todas los productos' callback={() => console.log('Todas las películas')} />
                    </li>
                    <li>
                        <FilterButtons label='Smartphones' callback={() => console.log('Acción')} />
                    </li>
                    <li>
                        <FilterButtons label='Portátiles' callback={() => console.log('Aventura')} />
                    </li>
                    <li>
                        <FilterButtons label='Tabletas' callback={() => console.log('Ciencia Ficción')} />
                    </li>
                    <li>
                        <FilterButtons label='Auriculares' callback={() => console.log('Comedia')} />
                    </li>
                    <li>
                        <FilterButtons label='Televisores' callback={() => console.log('Drama')} />
                    </li>
                </ul>
            </div>

            <div className='navAcciones'>
                <SearchBar />
                <CartWidget callback={() => console.log('Carrito')} />
            </div>
        </nav>
    )
}

export default Navbar