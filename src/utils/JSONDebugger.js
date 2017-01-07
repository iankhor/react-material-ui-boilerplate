import React, { Component } from 'react'

class JSONDebugger extends Component {
    render(){
        return(
              <pre>
                <h2> The Kick Ass On Screen Debugger React Component</h2>
                {JSON.stringify(this.props.data, null, 2)}
              </pre>
        )
    }
}

export default JSONDebugger

