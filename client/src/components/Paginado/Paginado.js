import React from 'react'
import './Paginado.css';

export default function Paginado(props) {
const{ countries, countriesPerPage, paginado}=props;

const pageNumber = [];

for (let i = 1 ; i <= Math.ceil(countries/countriesPerPage); i++) {
    pageNumber.push(i)
    
}

return (
    <nav className = 'nav'>
        <ul>
        {
            pageNumber && pageNumber.map( number => (
                <li className='li' key={number}>
                    <a onClick ={()=> paginado(number)}>{number}</a>
                </li>
            ))
        }
         </ul>
    </nav>
    )
}
