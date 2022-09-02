import React from 'react'
import axios from 'axios'
import { ACTIVITY_CREATE, GET_COUNTRIES} from './actionTypes'


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