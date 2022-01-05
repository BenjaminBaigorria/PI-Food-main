import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*<Route exact path="/" component={Landing}></Route>
          <Route  path="/home" component={Home}></Route>
          <Route path="/details/:id" component={Details}></Route>
          <Route path="/pokemon" component={PokemonCreate}></Route> */
