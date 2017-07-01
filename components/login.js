import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    constructor(){
        super();
        this.state= {name:"",pass:""}
        this.setName = this.setName.bind(this);
        this.setPass = this.setPass.bind(this);
        this.show = this.show.bind(this);
    }
    setName(e){

        var username = e.target.value;
        this.setState({name:username});

    }
    setPass(e){
        var password=e.target.value;
        this.setState({pass:password});

    }
    show(){
        axios.post('/login', {
            username: this.state.name,
            password: this.state.pass
        })
          .then(function (response) {
            console.log(response);
        })
          .catch(function (error) {
            console.log(error);
        });
        console.log(this.state);
    }
    render(){
        return (
            <div className="jumbotron">
                <input type="text" placeholder="enter ozmenta id" onChange={this.setName}/>
                <input type="password" placeholder="password" onChange={this.setPass}/>
                <button type="submit" onClick={this.show}>Login</button>
            </div>
        );
    }
}
export default Login;
