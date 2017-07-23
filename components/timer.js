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
            <div className="timer">
                <div className="clockdiv">
                      <div>
                        <span className="hours">{this.state.currentHour}</span>
                        <div className="smalltext">Hours</div>
                      </div>
                      <br/>
                      <div>
                        <span className="minutes">{this.state.currentMin}</span>
                        <div className="smalltext">Minutes</div>
                      </div>
                      <br/>
                      <div>
                        <span className="seconds">{this.state.currentSec}</span>
                        <div className="smalltext">Seconds</div>
                      </div>
                </div>
            </div>
        );
    }
}
