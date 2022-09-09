import { ACTIVITY_CREATE, GET_COUNTRIES, GET_COUNTRY_BY_NAME, GET_DETAIL, 
            FILTER_PER_COTINENT, GET_ACTIVITIES, FILTER_PER_ACTIVITIY, ORDER_BY_NAME, ORDER_BY_POPULATION } from '../actions/actionTypes'

let initialState = {
    countries :[],
    allCountries:[],
    activities :[],
    detail : [],
} 


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case ACTIVITY_CREATE:
            return {
                ...state,
            }
        case GET_DETAIL:
            return{
                ...state,
                detail : action.payload
            }
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries : action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities : action.payload
            }
        case FILTER_PER_COTINENT:
            const filtered = action.payload === 'All' ? state.allCountries : state.allCountries.filter( country => country.continent === action.payload);
            return{
                ...state,
                countries : filtered
            }
        case FILTER_PER_ACTIVITIY:
            const activitiesFound = state.activities.filter(act => act.name === action.payload);
            const countriesFounds = action.payload === 'All' || !activitiesFound.length ? state.allCountries : activitiesFound[0].countries
            return{
                ...state,
                countries : countriesFounds
            }
        case ORDER_BY_NAME:
            let sortedCoutries = action.payload === 'Asc'? 
            state.countries.sort(function (a, b){
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return 0
            }): state.countries.sort( function (a, b){
                if(a.name > b.name) return -1;
                if(b.name > a.name) return 1;
                return 0
            })
            return{
                ...state,
                countries : sortedCoutries
            }
        case ORDER_BY_POPULATION:
            let sortedCoutriesPop = action.payload === 'Asc'? 
            state.countries.sort(function (a, b){
                if(a.population > b.population) return 1;
                if(b.population > a.population) return -1;
                return 0
            }): state.countries.sort( function (a, b){
                if(a.population > b.population) return -1;
                if(b.population > a.population) return 1;
                return 0
            })
            return{
                ...state,
                countries : sortedCoutriesPop
            }
        default:
            return{
            ...state
        }
    }
}
