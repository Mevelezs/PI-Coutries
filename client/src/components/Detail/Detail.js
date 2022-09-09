import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDetails } from '../../actions/action';




export default function Detail(props) {

    const {history : {push}} = props;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(
            getDetails(props.match.params.id)
            );
            
        },[dispatch])
    
    const handleNavigate = (e) => {
        e.preventDefault();
        push('/countries')
    }
        
    const  { detail }  = useSelector((state) => (state))
    


return (
    <div>
        {
            detail.length === 1 ? (
            <div key= {detail[0].id}>
                <p> ID : {detail[0].id}</p>
                <img src = {detail[0].flag} alt = {detail[0].name} with = '100px' height = '100px'/>
                <p> Name : {detail[0].name} </p>
                <p> Capital : {detail[0].capital} </p>
                <p> Continent : {detail[0].continent} </p>
                <p> Subregion : {detail[0].subregion} </p>
                <p> Area : {detail[0].area}<label> km²</label> </p>
                <p> Population : {detail[0].population}</p>
            
        { detail[0].activities.length > 0 && detail[0].activities ? detail[0].activities.map(el =>(
            <div key = {el.id}>
                <p> ID : {el.id}</p>
                <p> Name : {el.name}</p>
                <p> Difficulty : {el.difficulty}</p>
                <p>Season : {el.season}</p>
                <p>Duration : {el.duration} Days</p>
                </div>
                ))
                : (
                    <div>
                        <h4> Activities no found </h4>
                   </div>
                    )
                }
            </div>)
            : <h1>loading...</h1> 
        }
        <button type = 'button' onClick = {(e)=>handleNavigate(e)}>Go Back</button>
    </div>
    )
}
