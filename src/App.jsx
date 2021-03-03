import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import Navigation from './shared/components/Navigation/Navigation';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  return (
    <Router>
      <Navigation />
      <main>
        {/* El Switch nos permite que sólo se evalúe una de las rutas y que haga un BREAK después de encontrar la correcta */}
        <Switch>
          <Route path="/" exact component={Users}></Route>
          <Route path="/places/new" exact component={NewPlace}></Route>
          <Route path="/:userId/places" exact component={UserPlaces}></Route>

          {/* Redirigimos a la página de origen en caso de que no coincida con ninguna ruta */}
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
