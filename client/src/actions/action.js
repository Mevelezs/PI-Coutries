import React from 'react'
import axios from 'axios'
import { ACTIVITY_CREATE, GET_COUNTRIES, GET_DETAIL, GET_COUNTRY_BY_NAME, FILTER_PER_COTINENT, GET_ACTIVITIES, FILTER_PER_ACTIVITIY, ORDER_BY_NAME, ORDER_BY_POPULATION} from './actionTypes'


export function getCountries(){
    return function (dispatch){
        fetch('http://localhost:3001/countries')
        .then(data => data.json())
        .then(response => dispatch(
            {
            type: GET_COUNTRIES, 
            payload: response
        }
        ))
    }
}

export function activityCeate(data){
    return async function (dispatch){
        let post = await axios.post('http://localhost:3001/activities', data)
        return dispatch(
            {
                type : ACTIVITY_CREATE,
                payload : post
            }
        )
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
            console.log(error) 
        }
    }
}

export const getCountryByName = (name)=>{
    return (dispatch) =>{
        fetch(`http://localhost:3001/countries?name=${name}`)
        .then(resp => resp.json())
        .then(data => dispatch(
            {
                type: GET_COUNTRY_BY_NAME,
                payload : data
            }
        )).catch(error => {
            alert(error)})
    }
}

export const getActivities = ()=>{
    return function (dispatch){
        return fetch ('http://localhost:3001/activities')
                .then(response => response.json())
                .then(data => dispatch({
                    type: GET_ACTIVITIES,
                    payload: data
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