import { Link } from "react-router-dom";
import './countrie.css'


export default function Countrie(props) {

    const {name, flag, id, continent} = props;
    return (
        <div className ='countrie'>
            <Link to = {`/detail/${id}`} className = 'link'>
                <h3> Name: {name} </h3>
                <h4> Continent: {continent} </h4>
                <img className='img' src = {flag} alt = {name} />
            </Link>
        </div>
    )
}
