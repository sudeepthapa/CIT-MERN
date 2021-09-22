import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import store from './store/store';
import {Provider} from 'react-redux';

function App() {
  return (
   <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Contact />
        </Route>
      </Switch>
    </Router>
   </Provider>
  );
}

export default App;
