import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { StoreProvider } from './store';
import App from './App';
import './styles.css';
import './polish.css';
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><MotionConfig reducedMotion="user"><StoreProvider><App/></StoreProvider></MotionConfig></BrowserRouter></React.StrictMode>);
