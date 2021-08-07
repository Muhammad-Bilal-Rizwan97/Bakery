import React from 'react';
import Admin from './components/admin';
import Staff from './components/staff';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
      

      
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/staff">
            <Staff />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
