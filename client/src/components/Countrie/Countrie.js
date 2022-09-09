import { Link } from "react-router-dom";


export default function Countrie(props) {

    const {name, flag, id, continent} = props;
    return (
        <div >
            <Link to = {`/detail/${id}`}>
                <br/>
                <label> Name: {name} </label>
                <br/>
                <label> Continent: {continent} </label>
                <br/>
                <img src = {flag} alt = {name} width= '400px' height= '300px'/>
                <br/>
                <br/>
            </Link>
        </div>
    )
}
