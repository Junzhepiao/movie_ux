import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MovieList} from './components/MovieList';
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={MovieList} /> 
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
