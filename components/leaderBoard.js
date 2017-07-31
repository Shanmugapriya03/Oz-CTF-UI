import React from 'react';
import Nav from './nav';
import axios from 'axios';
import * as constants from '../constants';
export default class LeaderBoard extends React.Component{
	constructor(){
		super();
		this.state = {users:[]}
		this.getUsers = this.getUsers.bind(this);

	}
	componentDidMount(){
		let self = this;
		axios.get(constants.BASE_URL+'/leaderboard')
			.then(function (response) {
				console.log(response);
				if (response.data.Message == "success"){
					self.setState({users:response.data.Data});
				}
			})
			.catch(function (error) {
				console.log(error);
				alert("network error please contact admin");
			});
	}
	getUsers(){
		let users = []
		for (let i in this.state.users){
			let user = this.state.users[i];
			user.Timestamp = new Date(Number(user.Timestamp)).toISOString();
			let item = <tr> <td> {user.UserName} </td> <td> {user.Points} </td> <td> {user.Timestamp} </td> </tr>;
			users.push(item);
		}
		return users;
	}
	render(){
        return(
			<div>
				<Nav screen="leaderBoard" />
				<div className="container-fluid board">
	                <div className="leader">
	                    <h3>Leader Board</h3>
	                </div>
	                <table className="table table-striped">
	                    <thead>
	                      <tr>
	                        <th>Name</th>
	                        <th>Points</th>
	                        <th>Time</th>
	                      </tr>
	                    </thead>
						<tbody>
	                      {this.getUsers()}
						</tbody>
					</table>
	            </div>
			</div>
        )
    }
}
