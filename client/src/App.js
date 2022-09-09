import './App.css';
import { Route } from 'react-router-dom'
import Countries from './components/Countries/Countries.js'
import ActivityCreate from './components/ActivityCreate/ActivityCreate';
import Detail from './components/Detail/Detail';


function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Route path ='/countries' component = {Countries}/>
      <Route path='/activityCreate' component= {ActivityCreate}/>
      <Route path ='/detail/:id' component = { Detail }/>
    </div>
  );
}

export default App;
