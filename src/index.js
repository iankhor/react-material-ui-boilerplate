import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Match, Miss } from 'react-router'

// Routes
import Routes from './components/shared/Routes'

// Material UI functions
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()


const Root = () => {
  return (
      <div>
        <Routes />
      </div>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
