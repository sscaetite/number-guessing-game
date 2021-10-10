import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoseArea from "./pages/LoseArea";
import MainArea from "./pages/MainArea";
import WinArea from "./pages/WinArea";

// localhost:3000/

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={MainArea} />
          <Route path="/win" component={WinArea} />
          <Route path="/lose" component={LoseArea} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
