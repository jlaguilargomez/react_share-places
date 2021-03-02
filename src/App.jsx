import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import Header from './shared/components/Header/Header';
import Navigation from './shared/components/Navigation/Navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
      <main>
        {/* El Switch nos permite que sólo se evalúe una de las rutas y que haga un BREAK después de encontrar la correcta */}
        <Switch>
          <Route path="/" exact component={Users}></Route>
          <Route path="/places/new" component={NewPlace}></Route>

          {/* Redirigimos a la página de origen en caso de que no coincida con ninguna ruta */}
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
