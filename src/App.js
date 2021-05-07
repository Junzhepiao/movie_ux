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
            <div className="flex-container">
              <div className="app-movie-list">
                <MovieList />
              </div>
              <div className="app-nominate-list">
                <NominateList />
              </div>
          </div>
          </Route> 
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
