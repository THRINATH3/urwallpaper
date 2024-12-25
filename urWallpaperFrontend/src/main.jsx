import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UserLoginStore from './context/userLoginstore.jsx';
import {GoogleOAuthProvider} from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserLoginStore>
    <GoogleOAuthProvider clientId='662316800490-5tuauhahtq16m4emgh3eq61hksup69jh.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>
    </UserLoginStore>
)
