import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { routes, defaultPage } from './routes';
import './App.css';

import Navigation from './navigation/Navigation';

function App() {
  const pages: any[] = routes.map(r => <Route key={r.Path} path={r.Path}>{r.Component}</Route>);
  const title = "Numbers";
  return (
    <Router>
      <div className="App container-fluid">
        <div className="row">
          <div className="col-4">
            <h3>algorithm</h3>
          </div>
          <div className="col">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Navigation></Navigation>
          </div>
          <div className="col">
            <Switch>
              {pages}
              <Route exact path="/">
                <Redirect to={defaultPage.Path} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <div className="container">
        <footer className="row border-top">
          <div className="col-6 hidden"></div>
          <div className="col-6">
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
