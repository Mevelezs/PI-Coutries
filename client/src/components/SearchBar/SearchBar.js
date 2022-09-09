import { useDispatch } from "react-redux"
import { useState } from "react"
import { getCountryByName } from "../../actions/action";


export default function SearchBar() {
const dispatch = useDispatch()
const [name, setName] = useState('');

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
    <div>
        <input type = 'text' placeholder = 'Search' onChange = {handleOnChange}></input>
        <button type ='submit' onClick = {handleOnClick}>Search</button>
    </div>
    )
}
