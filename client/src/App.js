import './App.scss';

import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';

/* Routing */
import PrivateRoute from './routing/PrivateRoute';
import LoadData from './routing/LoadData';
import Title from './routing/Title';
import NotFound from './routing/NotFound';
import Connection from './routing/Connection';

/* Alert */
import Alert from './components/alert/Alert';

/* Authentication */
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
import ForgotPassword from './components/authentication/ForgotPassword';
import ResetPassword from './components/authentication/ResetPassword';

/* Layout */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

/* About Website */
import About from './components/about/About';
import Privacy from './components/about/Privacy';

/* Portfolio */
import Portfolio from './components/portfolio/Portfolio';

/* Account */
import Account from './components/account/Account';

/* Home */
import Home from './components/home/Home';

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser(document.cookie))
  })

  return (
    <Provider store={store}>
      <Router>

        <div className="body">
          <Alert />
          <Title />
          <LoadData />
          <Navbar />
          <Connection />

          <Switch>
            <Route exact path='/'       component={Home}                    />
            <Route exact path='/signup' component={Signup}                  />
            <Route exact path='/login'  component={Login} />
            <Route exact path='/forgot password' component={ForgotPassword} />
            <Route path='/resetpassword'         component={ResetPassword}  />

            <Route exact path='/about'   component={About}                  />
            <Route exact path='/privacy' component={Privacy}                />

            <PrivateRoute exact path='/portfolio' component={Portfolio}     />
            <PrivateRoute exact path="/account" component={Account}         />
            
            <Route component={NotFound} />
          </Switch>
        </div>

        <div className="footer">
          <Footer/>
        </div>
        
      </Router>
    </Provider>
    )
};

export default App
