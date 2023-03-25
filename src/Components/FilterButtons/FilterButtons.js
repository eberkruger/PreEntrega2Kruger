import '../../Styles/styles.scss'

const FilterButtons = (props) => {
    return <button onClick={props.callback}>{props.label}</button>
}

export default FilterButtons