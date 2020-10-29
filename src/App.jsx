import React from 'react';
import Auth from './containers/Authentication/Auth';
import Dashboard from './containers/Dashboard/Dashboard.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';

import {AuthContext} from './context/authContext'
import Layout from './hoc/Layout/Layout';



function App() {

  const authContext = React.useContext(AuthContext);


  let routes = (<Switch>
    <Route path='/signin' exact component={Auth} />
    <Redirect to='/signin'/>
  </Switch>);
 
  let newRoutes;


if (authContext.isAuth) {
  newRoutes=(<Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/signin' component={Auth} />
    <Redirect to='/' />
    
  </Switch>);
}
  
  console.log(authContext.isAuth)

  // if (props.isAuth) {
  //   routes = (<Switch>
  //     <Route path='/' exact component={Dashboard} />
  //     <Route path='/checkout' component={Checkout} />
  //     <Route path='/orders' component={Orders} />
  //     <Route path='/logout' component={Logout} />
  //     <Redirect to='/'/>
  //   </Switch>)
  // }  



  return (
    <div className="App">
      <Layout>
      { !authContext.isAuth? routes : newRoutes }
      </Layout>
    </div>
  );
}

export default App;
