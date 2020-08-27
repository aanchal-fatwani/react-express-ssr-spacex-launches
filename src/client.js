import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

const state = window.__STATE__;

hydrate(
  <BrowserRouter >
    <App launchData={state.launchData} urlParams={state.urlParams}/>
  </BrowserRouter >,
  document.getElementById("app")
)
