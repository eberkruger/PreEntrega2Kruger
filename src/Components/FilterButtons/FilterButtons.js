import '../../Styles/styles.scss'

const FilterButtons = (props) => {
    return <button className='buttonFilter' onClick={props.callback}>{props.label}</button>
}

export default FilterButtons