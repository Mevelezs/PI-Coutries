import React, { useMemo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getCountries, activityCeate } from '../../actions/action';
import { Link } from 'react-router-dom';
import './ActivityCreate.css'

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
},[dispatch])

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
    setInput((input) => {
        return {
                ...input,
                [e.target.name]: e.target.value 
            }
    })
}
const handleId = (e)=>{// pises repetidos
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
const disabledSubmit = useMemo(() => { // inputs vacios => boton
    if(input.name.length > 0 && input.duration.length > 0 ) return false;
    return true;
},[input.name, input.duration])

const handleDelete = (e)=>{
    setInput({
        ...input,
        countryId : input.countryId.filter(count => count !== e)
    })
}
const handleSubmit= (e) =>{
    e.preventDefault();
    if(!input.name){
        return alert("Name is require") 
    }else if(!input.difficulty){
        return  alert ("the difficult is require")
    }else if(!input.season){
        return alert ("Season is require")
    }else if(input.duration < 1 || input.duration > 10 || input.duration.length > 1){
    return alert ("Number of days is invalid; Number Integer 0 - 9")
    }else if(input.countryId.length < 1){
        return alert ("Select Countries")
    }
    
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
    <>
        <form className='main-container' onSubmit = {handleSubmit}>
            <div className='main-title'>
                <h1> Activity Creator</h1>
            </div>

            <div className='sub-container'>
            <div className = 'left-container'>
                <div className='name'>
                <label> Name </label>
                <input 
                type='text' 
                name='name' 
                value = {input.name} 
                onChange = {handleonDuration} 
                autoComplete='off'
                />
                </div>
            <div className = 'difficult'>
                <label> Difficulty </label>
                <select onChange = {handleDifficult}>
                    <option value = ''>0 - 5 </option>
                    <option value ='1'> 1 </option>
                    <option value ='2'> 2 </option>
                    <option value ='3'> 3 </option>
                    <option value ='4'> 4 </option>
                    <option value ='5'> 5 </option>
                </select>
                <label> {input.difficulty}/5</label>
            </div>
            <div className ='season'>
                <label> Season of the year</label>
                <select onChange = {handleSeason}>
                <option value = ''>All Seasons</option>
                    <option value ='summer'> Summer </option>
                    <option value ='winter'> Winter </option>
                    <option value ='fall'> Fall </option>
                    <option value ='sprint'> Sprint</option>
                </select>
            </div>
            <div className ='duration'>
                <label> Duration </label>
                <input type ='number' name='duration' value = {input.duration} onChange = {handleonDuration}/>
                <label> Days </label>
            </div>
            </div>

            <div className = 'right-container'>
            <div>
                <label> Countries </label>
                <select onChange = {handleId}>
                <option value = ''>All Countries</option>
                    { countries.map((count) => (
                        <option key= {count.id} value = {count.id} >{count.name}</option>
                        ))}
                </select>
            </div>

            <h3 className='addTitle'>Countries Added</h3>
            {input.countryId.map(e => (
                <div className='countriesAdded'>
                <div className= 'unitCountry'>
                    <span>{e + '. '}</span>
                    <button type='button' onClick={()=>handleDelete(e)}>X</button>
                </div>
                </div>
                ))}
            </div>
            </div> 
            <div className = 'button-container'>
            <button className='bottom-button' type = 'submit' disabled = {disabledSubmit}> Send </button>
            <Link to = '/countries'><button className='bottom-button' type = 'button'> Go to All Countries</button></Link>
            </div>
        </form> 
    </>
    )
}
