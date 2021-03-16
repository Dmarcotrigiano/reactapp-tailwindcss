import "./App.css";
import {BrowserRouter as Router, Route, Switch, Link, } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route>
      <div class="margin-text-center">
        <p class="leading-8text-align-center text-5xl text-blue-300 font-semibold">
          Daniel Marco
        </p>
        <p class="text-2xl text-blue-200 font-medium">Platform Developer</p>
      </div>
      </Route>
      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
