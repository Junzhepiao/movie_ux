import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Movielist} from './components/Movielist';


function App() {
  return (
<div>
      <Router>
          <div> 
              <Switch>
                  <Route exact path='/' component={Movielist} /> 
              </Switch>
          </div>
      </Router>
      </div>
  );
}

export default App;
