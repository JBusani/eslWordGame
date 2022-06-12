import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Components/App/App.js';
import * as serviceWorker from './serviceWorker';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<StrictMode><App tab="home" /></StrictMode>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
