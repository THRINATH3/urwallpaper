import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UserLoginStore from './context/userLoginstore.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserLoginStore>
    <App />
    </UserLoginStore>
)
