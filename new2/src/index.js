import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Cart from './cart';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {createContext} from 'react'



export let UserContext=createContext()
let user={
  name:"shriram",
  sname:"patidar"
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <UserContext.Provider value={user}>

<App/>
</UserContext.Provider>



</>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
