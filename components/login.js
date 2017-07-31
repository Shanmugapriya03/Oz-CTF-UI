import React from 'react';
import axios from 'axios';
import * as constants from '../constants';
import { Redirect } from 'react-router';
import Nav from './nav';
class Login extends React.Component{
    constructor(){
        super();
        this.state= {name:"",pass:"", redirect: false}
        this.setName = this.setName.bind(this);
        this.setPass = this.setPass.bind(this);
        this.show = this.show.bind(this);
		this.showMessage = this.showMessage.bind(this);
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
		let self = this;
        axios.post(constants.BASE_URL+'/login', {
            username: this.state.name,
            password: this.state.pass
        })
          .then(function (response) {
            console.log(response.data);
			if (response.data.Message == "ok"){
				self.setState({redirect: true});
			}
			self.setState({message:response.data.Message});
        })
          .catch(function (error) {
            console.log(error);
			self.setState({message:"error"});
        });
		console.log(this.state);
    }
	showMessage(){
		if (this.state.message != undefined){
			return <div style={constants.messageStyle}>{this.state.message}</div>
		}
	}
    render(){
		if (this.state.redirect) {
			return <Redirect push to="/dashboard" />;
 		}
        return (
			<div>
				<Nav screen="loginScreen"/>
				<div className="jumbotron container-fluid">
					<div className="row">
						<center className="col-md-6 col-md-offset-3">
							<h1>Login</h1>
			                <input type="text" className="form-control" placeholder="enter ozmenta id" onChange={this.setName}/><br />
			                <input type="password" className="form-control" placeholder="password" onChange={this.setPass}/><br />
			                <button type="submit" className="btn btn-info" onClick={this.show}>Login</button>
							{this.showMessage()}
						</center>
					</div>
				</div>
		</div>
		);
    }
}

export default Login;
