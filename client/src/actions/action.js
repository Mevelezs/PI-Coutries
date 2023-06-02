
import axios from 'axios'

import { ACTIVITY_CREATE, GET_COUNTRIES, GET_DETAIL, GET_COUNTRY_BY_NAME, FILTER_PER_COTINENT, GET_ACTIVITIES, FILTER_PER_ACTIVITIY, ORDER_BY_NAME, ORDER_BY_POPULATION, PAGE} from './actionTypes/'


export function getCountries(){
    return async (dispatch) =>{
        const countries = await axios.get("http://pi-coutries-production.up.railway.app")
        return(
            dispatch(
            {
            type: GET_COUNTRIES, 
            payload: countries.data
        }
        ))
    }
}

export function activityCeate(data){
    return async (dispatch) =>{
        try{
        let post = await axios.post("http://localhost:3001/activities",data)
        return dispatch(
            {
                type : ACTIVITY_CREATE,
                payload : post
            }
        )
        }catch(error){
            console.log(error)
        }
    }
    
}

export function getDetails(id){
    return async(dispatch) => {
        try {
            const data = await axios.get(`http://localhost:3001/countries/${id}`)
                return dispatch(
                    {
                        type : GET_DETAIL,
                        payload: data.data
                    }
            ) 
        } catch (error) {
            alert('countrie no found')
        }
    }
}

export const getCountryByName = (name)=>{
    return async (dispatch) =>{
        try{
        const Name = await axios.get(`http://localhost:3001/countries?name=${name}`)
        return dispatch(
                {
                    type: GET_COUNTRY_BY_NAME,
                    payload : Name.data
                }
            )
        }catch(error){
            alert(error)
        }
    }
}

export const getActivities = ()=>{
    return async (dispatch) => {
        const activities = await axios.get("http://localhost:3001/activities")
                return(dispatch({
                    type: GET_ACTIVITIES,
                    payload: activities.data
                }))
    }

}
export const filterPerContinent = (payload) =>{
    return {
        type: FILTER_PER_COTINENT,
        payload
    }
}

export const filterPerActivity = (payload) =>{
    return{
        type : FILTER_PER_ACTIVITIY,
        payload
    }
}

export const orderByName = (payload)=>{
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export const orderPerPopul = (payload) =>{
    return{
        type: ORDER_BY_POPULATION,
        payload
    }
}
export const currentPages = (payload)=>{
    return {
        type:PAGE,
        payload
    }
}
