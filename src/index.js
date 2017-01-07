import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Match, Miss } from 'react-router'

//components
import App from './components/App';
import NotFound from './components/shared/NotFound'

// Material UI functions
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()



const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />  
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
