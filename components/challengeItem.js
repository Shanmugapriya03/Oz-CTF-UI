import React from 'react';

export default class ChallengeItem extends React.Component {
    render(){
		let solved = <span>Not solved</span>
		if (this.props.challenge.Solved == true){
			solved = <span ><span className="glyphicon glyphicon-star"></span> solved </span>
		}
        return (
            <div>
                <div className="challenge">
                    <h3 onClick={()=>this.props.setSelected(this.props.index)}>
                        {this.props.challenge.name}
                    </h3>
                </div>
                <div className="score">
					{solved}
			    </div>
                <hr/>
            </div>
        );
    }
}
