import React from 'react'
import style from './Paginado.module.css';

export default function Paginado(props) {
const{ countries, countriesPerPage, paginado}=props;

const pageNumber = [];

for (let i = 1 ; i <= Math.ceil(countries/countriesPerPage); i++) {
    pageNumber.push(i)
    
}

return (
    <nav>
        <ul>
        {
            pageNumber && pageNumber.map( number => (
                <li className={style.li} key={number}>
                    <a onClick ={()=> paginado(number)}>{number}</a>
                </li>
            ))
        }
         </ul>
    </nav>
    )
}
