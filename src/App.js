import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import CardDetails from "./CardDetails";
import CardList from "./CardList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <CardList />
          </Route>
          <Route path="/:id">
            <CardDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
