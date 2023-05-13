import { useDispatch } from "react-redux"
import { useState } from "react"
import { getCountryByName } from "../../actions/action";
import './SearchBar.css'


export default function SearchBar() {
const dispatch = useDispatch()
const [name, setName] = useState(' ');

const handleOnChange = (e) =>{
    e.preventDefault();
    setName(e.target.value)
}

const handleOnClick = (e)=>{
    e.preventDefault();
    dispatch(
        getCountryByName(name)
    )
}

return (
    <form className='searchbar'>
        <input className = 'bottom-button' type = 'text' placeholder = 'Search' onChange = {handleOnChange}></input>
        <button className = 'bottom-button' type ='submit' onClick = {handleOnClick}>Search</button>
    </form>
    )
}
