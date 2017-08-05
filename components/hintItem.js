import React from 'react';
export default class HintItem extends React.Component{
	constructor(){
		super();
		this.state = {active:false};
		this.renderHint = this.renderHint.bind(this);
	}
	componentWillMount(){
		if ( this.props.hcontent != "" ){
			this.setState({active:true})
		}
	}
	renderHint(){
		if (this.state.active){
			return <h4 className="challenge" onClick={()=>this.props.setHint(this.props.hcontent)}>{this.props.hname}</h4>
		}else{
			return <h4 className="challenge" onClick={()=>this.props.setHint(undefined)} style={ {opacity:0.5} }>{this.props.hname}</h4>;
		}
	}
	render(){
        return(
            <div className="hint">
				{this.renderHint()}
            </div>
        )
    }
}
