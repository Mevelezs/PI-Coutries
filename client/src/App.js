import './App.css';
import { Route } from 'react-router-dom'
import Countries from './components/Countries/Countries.js'
import ActivityCreate from './components/ActivityCreate/ActivityCreate';
import Detail from './components/Detail/Detail';
import LandingPage from './components/landing_Page/LandingPage';



function App() {
  return (
    <div className="App">
      <Route exact path ='/' component = {LandingPage}/>
      <Route exact path ='/countries' component = {Countries}/>
      <Route path='/activityCreate' component= {ActivityCreate}/>
      <Route path ='/detail/:id' component = { Detail }/>
    </div>
  );
}

export default App;
