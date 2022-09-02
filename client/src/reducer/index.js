import React from 'react'
import { ACTIVITY_CREATE, GET_COUNTRIES } from '../actions/actionTypes'

let initialState = {
    countries :[]
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case ACTIVITY_CREATE:
            return {
                ...state,
            }
        default:
            return{
            ...state
        }
    }
}
