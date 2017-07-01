import React from 'react';

export default class ChallengeItem extends React.Component {
    render(){
        return (
            <div>
                <h3 onClick={()=>this.props.setSelected(this.props.name)}>{this.props.name}</h3>
                <span>{this.props.score}</span>
            </div>
        );
    }
}
