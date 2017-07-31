import React from 'react';
import {Link} from 'react-router-dom';
export default class Nav extends React.Component{
    render(){
		let login = <Link to="/login" className="btn btn-danger navbar-btn">login</Link>;
		let logout = <Link to="/logout" className="btn btn-danger navbar-btn">logout</Link>;
		let leaderBoard = <Link to="/leaderBoard" className="btn btn-primary navbar-btn">LeaderBoard</Link>;
		let items = [];
		if (this.props.isLoggedIn == true){
			items.push(logout);
			items.push(leaderBoard);
		}else if (this.props.screen == "loginScreen"){
			items.push(leaderBoard);
		}else if (this.props.screen != "leaderBoard"){
			items.push(login);
		}
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                            <a className="navbar-brand" href="#">OZ_CTF</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
							{items}
                    </ul>
                </div>
            </nav>
        );
    }
}
