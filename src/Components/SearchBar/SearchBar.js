import '../../Styles/styles.scss'
import search from './assets/search.svg'

const SearchBar = () => {
    return (
        <div className='navAccionesForm'>
            <input type="text" id="navBuscador" placeholder="Buscar película"/>
            <button id="navBotonBuscar"><img src={search} alt='Search'/></button>
        </div>
    )
}

export default SearchBar