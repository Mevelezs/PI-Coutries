import { getCountries, filterPerContinent, getActivities, filterPerActivity, orderByName, orderPerPopul, currentPages} from '../../actions/action'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Country from '../Country/Countrie';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';
import Paginado from '../Paginado/Paginado';
import './Countries.css'

export default function Countries(props) {

const {history : {push}} = props;
const { pages } = useSelector(state => state)

const dispatch = useDispatch()
const { countries } = useSelector(state => state);
const { allCountries } = useSelector (state => state)
const {activities} = useSelector (state => state)

const [currentPage, setCurrentPage] = useState(pages);
const [countriesPerPage, setCountriesPerPage] = useState(10);

const indexOfLastCountry = currentPage === 1 ? 9 : currentPage * countriesPerPage;
const indexOfFirstCountry = currentPage === 1 ? 0 :indexOfLastCountry - countriesPerPage;

const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)
// console.log(countries + 'countries')
// console.log(currentCountries + 'currentCountries')


useEffect(()=>{
    dispatch(getCountries())
    dispatch (getActivities())
    },[])

const getCountryAgain = (e)=>{
    e.preventDefault();
    dispatch(getCountries())
}

const paginado = (pageNumber)=>{
    setCurrentPage(pageNumber)
    dispatch(
        currentPages(pageNumber)
    )
}


const goTocreateActivity = (e) =>{
    e.preventDefault();
    push('/activityCreate')
}


const continents = allCountries.map(counttry => counttry.continent);
const setContinent=[...new Set(continents)]

const handleOnfilterPerContinet = (e) =>{
    e.preventDefault()
    dispatch(
        filterPerContinent(e.target.value)
    )
}

const handleOnfilterPerActivityName = (e) =>{
    e.preventDefault();
    dispatch(
        filterPerActivity(e.target.value)
    )
}

const handleOrderAlf = (e) =>{
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage (1)
    
}

const handleOrderPerPopul = (e)=>{
    e.preventDefault();
    dispatch(orderPerPopul(e.target.value))
}


return (
        
   <div className='bigDiv'>

    <button className = 'bottom-button' type = 'button' onClick = {goTocreateActivity}> Create Activities </button>
    <button className = 'bottom-button' type = 'button' onClick = {getCountryAgain}> Get All Countries </button>
    <SearchBar/>

    <select className = 'bottom-button' onChange = {handleOnfilterPerContinet}>
        <option value = 'All'> All Continent</option>
        {
        setContinent?.map(continent =>(
            <option key ={continent} value= {continent}>{continent}</option>
            ))
        }
    </select>
    
    <select className = 'bottom-button' onChange = {handleOnfilterPerActivityName}>
    <option value = 'All'> All Activities</option>
        {
            activities?.map(act => (
                <option key = {act.id} value = {act.name}>{act.name}</option>
            ))
        }
    </select>

    <select className = 'bottom-button' onChange = {handleOrderAlf}>
        <option value ='All'>Alphabetic Order</option>
        <option value ='Asc'>Ascendente</option>
        <option value ='Desc'>Descendente</option>
    </select>

    <select className = 'bottom-button' onChange = {handleOrderPerPopul}>
        <option value ='All'>Order Per Population</option>
        <option value ='Asc'>Ascendente</option>
        <option value ='Desc'>Descendente</option>
    </select>

    <Paginado
        paginado = {paginado}
        countriesPerPage = {countriesPerPage}
        countries = {countries.length}
    />

    <div className = 'Countries'>
    {
        currentCountries?.map(coun => (
            <Country
            key = {coun.id}
            id = {coun.id}
            name = {coun.name}
            continent = {coun.continent}
            flag = {coun.flag}
            />
            )) 
        }
    </div>
    
    </div>
    )

}
