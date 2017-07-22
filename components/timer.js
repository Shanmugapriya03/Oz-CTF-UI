import React from 'react';
export default class Timer extends React.Component{
    constructor(){
            super();
			this.state = {currentHour:0, currentMin:0, currentSec:0, endTime:"2017-07-22T16:44:06.970Z"}
			this.updateTimer = this.updateTimer.bind(this);
			this.setDummyEndDate = this.setDummyEndDate.bind(this);
    };


	componentWillMount(){
		this.setDummyEndDate();
		setInterval(this.updateTimer, 1000);
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
			return;
		}

		let dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
		let hourDiff = Math.floor( timeDiff / (1000 * 3600) ) % 24;
		let minDiff = Math.floor( timeDiff / (1000 * 60) ) % 60;
		let secDiff = Math.floor( timeDiff / (1000) ) % 60;
		this.setState({currentHour: hourDiff, currentMin: minDiff, currentSec:secDiff});

	}
    render(){

        return(
            <div>
                <p>{this.state.currentHour}H: {this.state.currentMin}M: {this.state.currentSec}S</p>
            </div>
        );
    }
}
