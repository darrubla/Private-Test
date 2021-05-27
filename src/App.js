import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu  from './containers/Menu';
import Form  from './containers/Form';

import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/:airlineName" component={Form} />
      </Switch>
    </BrowserRouter>);
}

export default App;
