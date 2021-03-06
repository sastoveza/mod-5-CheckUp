import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './components/stylesheet/search.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { fetchDoctors } from './actions/DoctorActions';
import UsersReducer from './reducers/UsersReducer';
import DoctorsReducer from './reducers/DoctorsReducer';
import AppointmentsReducer from './reducers/AppointmentsReducer';
import { Provider } from 'react-redux'; 
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


const rootReducer = combineReducers({
	doctors: DoctorsReducer,
	appointments: AppointmentsReducer,
	users: UsersReducer
})

const store =
	createStore(
		rootReducer, composeWithDevTools(applyMiddleware(thunk)))



ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();

