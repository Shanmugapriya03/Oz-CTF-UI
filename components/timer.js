import React from 'react';
import { Redirect } from 'react-router';
export default class Timer extends React.Component{
    constructor(){
            super();
			this.state = {redirect:false, currentHour:0, currentMin:0, currentSec:0, endTime:"2017-07-22T16:44:06.970Z", interval : 0}
			this.updateTimer = this.updateTimer.bind(this);
			this.setDummyEndDate = this.setDummyEndDate.bind(this);
			this.setEndDate = this.setEndDate.bind(this);
	};


	componentDidMount(){
		//this.setDummyEndDate();
		this.setEndDate();
		let inter = setInterval(this.updateTimer, 1000);
		this.setState({interval:inter});
	}
	setEndDate(){
		console.log(this.props)
		let current = new Date(Number(this.props.start));
		let newTime = current.getTime() + 1000 * 3600 * 2; //add 2 hrs
		let dummyEnd = new Date(newTime);
		this.setState({endTime : dummyEnd.toISOString()})
	}
	setDummyEndDate(){
		let current = new Date();
		let newTime = current.getTime() + 1000 * 3600 * 2; //add 2 hrs
		let dummyEnd = new Date(newTime);
		this.setState({endTime : dummyEnd.toISOString()})
	}
	updateTimer(){
		let endTime = new Date( this.state.endTime );
		let curTime = new Date();
		let timeDiff = endTime.getTime() - curTime.getTime();

		if ( timeDiff <= 0 ){
			console.log("time finised");
			clearInterval(this.state.interval);
			this.setState({redirect:true})
			return;
		}

		let dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
		let hourDiff = Math.floor( timeDiff / (1000 * 3600) ) % 24;
		let minDiff = Math.floor( timeDiff / (1000 * 60) ) % 60;
		let secDiff = Math.floor( timeDiff / (1000) ) % 60;
		this.setState({currentHour: hourDiff, currentMin: minDiff, currentSec:secDiff});

	}
    render(){
		if (this.state.redirect) {
			return <Redirect push to="/over" />;
 		}
        return(
            <div className="timer">
                <div className="clockdiv">
                      <div>
                        <span>{this.state.currentHour} H: {this.state.currentMin} M: {this.state.currentSec} S</span>
                      </div>
                </div>
            </div>
        );
    }
}
