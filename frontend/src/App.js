import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import UserInput from "./Components/UserInput";
import LeaderBoard from "./Components/LeaderBoard";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/leaderboard" exact component={LeaderBoard} />
          <Route path="/entermarks" exact component={UserInput} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
