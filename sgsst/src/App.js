
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes"


function App() {
  return (
    <Router>
    <div className="container p-3">
      <Switch>
        <Routes />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
