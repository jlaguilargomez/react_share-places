import { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace/NewPlace';
import Navigation from './shared/components/Navigation/Navigation';
import UserPlaces from './places/pages/UserPlaces/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace/UpdatePlace';
import Authenticate from './places/pages/Authenticate/Authenticate';

import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Router>
        <Navigation />
        <main>
          {/* El Switch nos permite que sólo se evalúe una de las rutas y que haga un BREAK después de encontrar la correcta */}
          <Switch>
            <Route path="/" exact component={Users}></Route>
            <Route path="/places/new" exact component={NewPlace}></Route>
            <Route path="/:userId/places" exact component={UserPlaces}></Route>
            <Route
              path="/places/:placeId"
              exact
              component={UpdatePlace}
            ></Route>
            <Route path="/auth" exact component={Authenticate}></Route>

            {/* Redirigimos a la página de origen en caso de que no coincida con ninguna ruta */}
            <Redirect to="/"></Redirect>
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
