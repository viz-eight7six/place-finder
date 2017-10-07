import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route} from 'react-router-dom';
import App from './App';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <HashRouter>
        <div>
          <Route path='/' component={ App }></Route>
        </div>
      </HashRouter>
    </Provider>
  );
};

export default Root;
