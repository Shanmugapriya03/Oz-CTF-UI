import React from 'react';
import {Link} from 'react-router-dom';
export default class Nav extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                            <a className="navbar-brand" href="#">OZ_CTF</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                            <Link to="/login" className="btn btn-danger navbar-btn">login</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}
