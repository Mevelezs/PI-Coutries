import'./LandingPage.css'
import { useHistory } from 'react-router'


export default function LandingPage() {
const history = useHistory();

return (
    <div className ='landing' >
        <div>
            <h1 className = 'title'>Countries  App</h1>
            <img src = 'https://s03.s3c.es/imag/_v0/770x420/c/9/0/700x420_bola-mundo-graficas-dreamstime.jpg'/>
            <button className = 'landing-button' type= 'button' onClick = {() => history.push('/countries')}> Enter </button>
        </div>
    </div>
    )
}
