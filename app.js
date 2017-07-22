import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index'
import Login from './components/login'
import Nav from './components/nav'
import Dashboard from './components/dashboard'
import Welcome from './components/welcome'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends React.Component {
  render () {
    return <p></p>;
  }
}

ReactDOM.render(
    <Router>
       <span>
       <Nav/>
       <Dashboard/>
         <div>
           <Route exact path="/" component={App}/>
           <Route path="/login" component={Login}/>
           <Route path="/index" component={Index}/>
         </div>
       </span>
     </Router>
    ,
    document.getElementById('app')
);
