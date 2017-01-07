import React, { Component } from 'react'
import App from './App'

//material-ui components
import { TextField } from 'material-ui/';

class PageOne extends Component {
    render(){
        return(
            <App> 
                <br />
                <TextField
                    hintText="Type something here"
                    floatingLabelText="This is a text field child from PageOne component"
                />
            </App> 
        )
    }
}

export default PageOne

