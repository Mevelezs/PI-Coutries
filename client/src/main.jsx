import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

render(
  <BrowserRouter>
    <Provider store = {store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

