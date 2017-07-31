import React from 'react';
import axios from 'axios';
import * as constants from '../constants';
import Nav from './nav';
class Over extends React.Component{
    constructor(){
        super();
        this.state= {};
        this.logout = this.logout.bind(this);
    }

    logout(){
		let self = this;
        axios.get(constants.BASE_URL+'/logout')
          .then(function (response) {
            console.log(response.data);
			if (response.data.Message != "done"){
				self.setState({message:response.data.Message});
			}
        })
          .catch(function (error) {
            console.log(error);
			self.setState({message:"error"});
        });
    }
	showMessage(){
		if (this.state.message != undefined){
			return <div style={constants.messageStyle}>{this.state.message}</div>
		}
	}
	componentWillMount(){
		this.logout();
	}
    render(){
        return (
			<div>
				<Nav isLoggedIn={false}/>
				<div className="jumbotron container-fluid">
					<div className="row">
						<center className="col-md-6 col-md-offset-3">
							<h2> Time finised </h2>
							You are being Logged out
							{this.showMessage()}
						</center>
					</div>
				</div>
			</div>
		);
    }
}

export default Over;
