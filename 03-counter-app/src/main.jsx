import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import { CounterApp } from './CounterApp';
//import { App } from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0}/>
    </React.StrictMode>
)