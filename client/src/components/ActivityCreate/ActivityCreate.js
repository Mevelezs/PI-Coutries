import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { getCountries, activityCeate } from '../../actions/action';
import { Link } from 'react-router-dom';


export default function ActivityCreate() {
const history = useHistory();
const dispatch = useDispatch();
const {countries}= useSelector((state) => (state));

const [input, setInput] = useState(
    {
        name:'',
        difficulty:'',
        season:'',
        duration:'',
        countryId:[],
    }
)


useEffect(()=>{
    dispatch(
        getCountries(),
    )
},[])

const handleSeason = (e)=>{
    e.preventDefault();
    setInput(
        {
            ...input,
            season: e.target.value
        }
    )
}
const handleDifficult = (e) => {
    e.preventDefault();
    setInput(
        {
            ...input,
            difficulty : e.target.value
        }
    )
}
const handleonDuration = (e) => {
    e.preventDefault();
    setInput(
        {
            ...input,
            [e.target.name]: e.target.value,
        }
    )
}
const handleId = (e)=>{
    e.preventDefault();
    if(input.countryId.includes(e.target.value)) {
        alert('the country was already added');
    }else{
        setInput(
            {
                ...input,
                countryId:[...input.countryId, e.target.value]
            }
            )
        }
}
const handleSubmit= (e) =>{
    e.preventDefault();
    dispatch(activityCeate(input));
    alert( 'activity crated');
    setInput(
        {
            name:'',
            difficulty:'',
            season:'',
            duration:'',
            countryId:[],
        }
    )
    history.push('/countries')
}

return (
    <div>
        <form onSubmit = {handleSubmit}>
            <label> Name </label>
            <input type='text' name='name' value = {input.name} onChange = {handleonDuration}/>
            <br/>

            <label> Difficulty </label>
            <select onChange = {handleDifficult}>
                <option value = '' />
                <option value ='1'> 1 </option>
                <option value ='2'> 2 </option>
                <option value ='3'> 3 </option>
                <option value ='4'> 4 </option>
                <option value ='5'> 5 </option>
            </select>
            <label> {input.difficulty}/5</label>
            <br/>

            <label> Season of the year</label>
            <select onChange = {handleSeason}>
                <option value = '' />
                <option value ='summer'> Summer </option>
                <option value ='winter'> Winter </option>
                <option value ='fall'> Fall </option>
                <option value ='sprint'> Sprint</option>
            </select>
            <br/>

            <label> Duration </label>
            <input type = 'number' name='duration' value = {input.duration} onChange = {handleonDuration}/>
            <label> Days </label>
            <br/>

            <label> Countries </label>
            <select onChange = {handleId}>
                <option value = '' />
                { countries.map((count) => (
                    <option value = {count.id} >{count.name}</option>
                ))}
            </select>
            <ul>PAISES AGREGADOS<li>{input.countryId.map(e => e + '. ')}</li></ul>
            <button type = 'submit' onClick = {handleSubmit}> Send </button>
            <Link to = '/countries'><button type = 'button'> Go Back</button></Link>
        </form> 
    </div>
    )
}