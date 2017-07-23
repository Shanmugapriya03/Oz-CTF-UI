import React from 'react';

export default class ChallengeItem extends React.Component {
    render(){
        return (
            <div>
                <div className="challenge">
                    <h3 onClick={()=>this.props.setSelected(this.props.content,this.props.question,this.props.score,this.props.hint)}>
                        {this.props.name}
                    </h3>
                </div>
                <div className="score">
                    <div className="glyphicon glyphicon-star"></div>
                    <span>{this.props.score} pts</span>
                </div>
                <hr/>
            </div>
        );
    }
}
