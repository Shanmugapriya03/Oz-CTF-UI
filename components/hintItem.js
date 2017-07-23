import React from 'react';
export default class HintItem extends React.Component{
    render(){
        return(
            <div>
                <h4>{this.props.hname}</h4>
                <p>{this.props.def}</p>
            </div>
        )
    }
}
