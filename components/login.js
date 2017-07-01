import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state= {name:""}
        this.setName = this.setName.bind(this);
        this.show = this.show.bind(this);
    }
    setName(e){

        var username = e.target.value;
        this.setState({name:username})
        alert(this.state.name);
    }
    show(){
        alert(this.state);
    }
    render(){
        console.log(11111);
        return (
            <div>
                <input type="text" placeholder="enter ozmenta id" onChange={this.setName}/>
                <button type="submit" onClick={this.show}>Login</button>
            </div>
        );
    }
}
export default Login;
