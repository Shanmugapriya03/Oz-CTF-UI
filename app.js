import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index'
import Login from './components/login'
class App extends React.Component {
    add(a,b){
        return a+b;
    }
  render () {
    return <p> Hello React! {this.add("shiva","kishore")}</p>;
  }
}

ReactDOM.render(
    <span>
        <App/>
        <Login/>
    </span>
    ,
    document.getElementById('app')
);
