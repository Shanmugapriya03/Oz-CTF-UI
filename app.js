import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index'
import Login from './components/login'
import Nav from './components/nav'
import Dashboard from './components/dashboard'
import Welcome from './components/welcome'
import LeaderBoard from './components/leaderBoard'
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'
class App extends React.Component {
  render () {
    return (
		<span>
			<Dashboard/>
		</span>
	);
  }
}

ReactDOM.render(
	<HashRouter>
		<span>
			<Nav/>
			<Route exact path="/" component={Login}/>
			<Route path="/login" component={Login}/>
			<Route path="/dashboard" component={Dashboard}/>
			<Route path="/leaderBoard" component={LeaderBoard}/>
		</span>
	</HashRouter>
	,
    document.getElementById('app')
);
