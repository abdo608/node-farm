
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductTemplate from './components/ProductTemplate';
import Overview from './Overview';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Overview} exact />
        <Route path='/product' component={ProductTemplate} />

      </Switch>
    </Router>
  );
}

export default App;
