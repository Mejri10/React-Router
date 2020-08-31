import React from 'react';
import './App.css';
import {Link,Route,Switch,Redirect} from 'react-router-dom';
import Category from './components/category';
import products from './components/products';
import Admin from './components/admin';
import Login from './components/login';
import  { fakeAuth } from './components/login';

/*const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}/>
  )
}*/

function App() {
  return (
    <div className="App">
     <nav>
      <ul>
        <li><Link to="/Category">Category</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/Admin">Admin</Link></li>

        
      </ul>
     </nav>
     <Switch>

        <Route  path="/Category" component={Category} />
        <Route path="/products" component={products} />
        <PrivateRoute /*authed={fakeAuth.isAuthenticated}*/ path='/Admin' component={Admin}/>
        <Route  path="/Login" component={Login} />

  </Switch>

    </div>
  );
}
const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}

export default App;
