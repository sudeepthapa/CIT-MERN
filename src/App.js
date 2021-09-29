import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/book/add">
            <AddBook />
          </Route>
          <Route path="/">
            <BookList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
