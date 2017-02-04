import React from 'react'

//Routes
import NotFound from './NotFound'
import App from '../App';
import PageOne from '../PageOne'

import { BrowserRouter, Route } from 'react-router-dom'

const Routes = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />  
        <Route exactly path="/PageOne" component={PageOne} />  
        <Route component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}

export default Routes