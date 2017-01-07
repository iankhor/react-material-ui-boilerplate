import React, { Component } from 'react'
import App from './App'
import JSONDebugger from '../utils/JSONDebugger'

// example JSON data
const exampleJSONData = {
    data1: 'data1',
    data2: 'data2',
    data3: 123
}

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
                <p> Below is an example of the JSON debugger</p>
                <JSONDebugger json={exampleJSONData} />

            </App> 
        )
    }
}

export default PageOne

