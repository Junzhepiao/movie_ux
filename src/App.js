import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList } from './components/MovieList';
import { GlobalProvider } from './context/GlobalState';
import { NominateList } from './components/NominateList';


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <MovieList />
            <NominateList />
          </Route> 
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
