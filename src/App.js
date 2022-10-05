import {useState, useEffect} from "react";
import Movie from "./components/Movie";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id"> {/*go to detail page*/}
        <Detail />
      </Route>
      <Route path = "/"> {/*go to homepage*/}
        <Home />
      </Route>
    </Switch>
  </Router>
}
export default App;
