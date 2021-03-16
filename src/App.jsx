import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Site from './components/Site/Site';
function App() {
  return (
    <div class="flex justify-center">
      <Router>
        <Switch>
          <Route exact path="/">
            <div class="flex-col  ">
              <p class="justify-center text-right text-5xl text-blue-300 font-semibold">
                Daniel Marco
              </p>
              <p class="flex-1 text-2xl text-blue-200 font-medium">
                Platform Developer
              </p>
              <Site />
            </div>
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
