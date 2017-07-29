import React from 'react';
export default class HintItem extends React.Component{
    render(){
        return(
            <div className="hint">
                <h4 className="challenge">{this.props.hname}</h4>
                <p>PointLoss : {this.props.pointLoss}</p>
            </div>
        )
    }
}
