import './App.css';
import Form from "./components/Form";
import Results from "./components/Results";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container mt-5">
        <div className="col-sm-9">
          <Form />
          <Switch>
            <Route exact path="/:type/:id">
              <Results />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
