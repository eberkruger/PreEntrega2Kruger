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
                        <FilterButtons label='Todas las películas' callback={() => console.log('Todas las películas')} />
                    </li>
                    <li>
                        <FilterButtons label='Acción' callback={() => console.log('Acción')} />
                    </li>
                    <li>
                        <FilterButtons label='Aventura' callback={() => console.log('Aventura')} />
                    </li>
                    <li>
                        <FilterButtons label='Ciencia Ficción' callback={() => console.log('Ciencia Ficción')} />
                    </li>
                    <li>
                        <FilterButtons label='Comedia' callback={() => console.log('Comedia')} />
                    </li>
                    <li>
                        <FilterButtons label='Drama' callback={() => console.log('Drama')} />
                    </li>
                    <li>
                        <FilterButtons label='Fantasía' callback={() => console.log('Fantasía')} />
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