import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider}  from "react-redux" //provider is a componet or module that is used to provide the complete store to the user
import store from './store.js' // importing the store
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store  = {store}> 
      {/* this provired will store a store and this store should be available or appicable to everyone and we need to import the provider  as we have exported the store we ened to import it as well
      like for all the components the store should be available*/}
    <App />
    </Provider>
  </StrictMode>,
)

