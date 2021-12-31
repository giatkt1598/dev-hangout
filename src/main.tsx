import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import "simplebar/src/simplebar.css";
import Router from './router'
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <Toaster />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
