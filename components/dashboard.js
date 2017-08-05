import React from 'react';
import ChallengeItem from './challengeItem'
import Timer from './timer';
import HintItem from './hintItem';
import axios from 'axios';
import * as constants from '../constants';
import Nav from './nav';
export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            challenges: [
                {name:"Challenge 1", score:"100" ,content:"challenges--1",question:"Question----1 goes here.........",
                hint:[
                    {hname:"Hint 1",pointLoss:20}
                    ]
                },
                {name:"Challenge 2", score:"1000" ,content:"challenges--2",question:"Question----2 goes here.........",
                    hint:[
                        {hname:"Hint 1",pointLoss:30},
                        {hname:"Hint 2",pointLoss:25}
                    ]
                },
                {name:"Challenge 3",score:"500" ,content:"challenges--3",question:"Question----3 goes here.........",
                    hint:[
                        {hname:"Hint 1",pointLoss:45},
                        {hname:"Hint 2",pointLoss:5},
                        {hname:"Hint 3",pointLoss:10}
                        ]
                },
            ],
            selected:null,
            currentFlag:null,
            eachScore:null,
			user:{}
        };

        this.renderItems = this.renderItems.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.renderScore = this.renderScore.bind(this);
        this.setSelected = this.setSelected.bind(this);
        this.renderHint= this.renderHint.bind(this);
		this.setFlag = this.setFlag.bind(this);
		this.submitFlag = this.submitFlag.bind(this);
		this.displayTimer = this.displayTimer.bind(this);
		this.setHint = this.setHint.bind(this);
    }
    renderHint(){
        var hints=[];
		let selInd = this.state.selected;
		if (this.state.challenges[selInd] == undefined)
			return;
		let val = this.state.challenges[selInd].hint;
        for(let i in val){
			console.log(val[i]);
            hints.push(<HintItem key={i} setHint={this.setHint} hname={val[i].Name} hcontent={val[i].Content}/>);
        }
        return hints;
    }
    renderItems(){
        var items=[];
        for (let i in this.state.challenges){
            items.push(<ChallengeItem challenge={this.state.challenges[i]} key={i} index={i} setSelected={this.setSelected}/>);
        }
        return items;
    }
	componentWillMount(){
		let self = this;
		axios.get(constants.BASE_URL+'/listChallenges')
			.then(function (response) {
				console.log(response);
				if (response.data.Message == "success"){
					self.setState({challenges:response.data.Data});
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		axios.get(constants.BASE_URL+'/userDetails')
			.then(function (response) {
				console.log(response);
				if (response.data.Message == "success"){
					self.setState({user:response.data.Data});
				}else{
					alert("please login again to continue");
				}
			})
			.catch(function (error) {
				console.log(error);
				alert("network error please contact admin");
			});

	}
	setFlag(e){
		var val = e.target.value;
        this.setState({currentFlag: val});
	}
	submitFlag(){
		console.log(this.state);
		let self = this;
		let i = this.state.selected;
        axios.post(constants.BASE_URL+'/submitFlag', {
			flag:this.state.currentFlag,
			cid:this.state.challenges[i].ID
        })
          .then(function (response) {
            console.log(response.data);
			if (response.data.Message == "valid"){
				let challengesClone = self.state.challenges;
				let i = self.state.selected;
				challengesClone[i].Solved = true;
				self.setState({challenges:challengesClone, message:"valid"});
			}else{
				self.setState({message:response.data.Message});
			}
		})
          .catch(function (error) {
            console.log(error);
			self.setState({message:"error"});
        });
	}
    renderContent(){
        if (this.state.selected != null){
			let i = this.state.selected;
            return (
                <div>
                    <div className="heading">
                        <h1>{this.state.challenges[i].name} <span className="badge">{this.state.challenges[i].score} pts</span></h1>
                    </div>
                    <div className="well well-lg question">
                        <p>{this.state.challenges[i].content}</p>
                    </div>
					{this.showMessage()}
                    <div className="form-group col-lg-10">
                        <input type="text" className="form-control" placeholder="Enter flag here" onChange={this.setFlag}></input>
                    </div>
                    <button type="button" className="btn btn-default btn-primary btn-lg" onClick={this.submitFlag}>submit</button>
                </div>
            );
        }else{
			return (
				<h3 className="select">Select a challenge to get started</h3>
			);
		}
    }
    renderScore(){
        let myScore = 0, tot = 0;
        for(let i in this.state.challenges){
			if (this.state.challenges[i].Solved == true)
				myScore+=Number(this.state.challenges[i].score);
			tot+=Number(this.state.challenges[i].score);
        }
        return <span>{myScore} / {tot}</span>;
    }
    setSelected(index){
        this.setState({selected:index, message:null});
    }
	setHint(content){
		this.setState({message:content});
	}
	showMessage(){
		if (this.state.message != undefined){
			return <div className="alert alert-info" role="alert"> {this.state.message} </div>
		}
	}
	displayTimer(){
		if (this.state.user.StartTime != undefined)
			return <Timer start={this.state.user.StartTime} />
		else
			return <span></span>
	}
    render(){
        return (
            <span>
				<Nav isLoggedIn={true} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2  verNav list-scroll">
                            <div className="col-md-offset-1">
                                {this.renderItems()}
                            </div>
                        </div>

                        <div className="col-md-8 content">
                            {this.renderContent()}
                        </div>

                        <div className="col-md-2">
								{this.displayTimer()}
                                <br/>
                                <div className="tot">Score</div>
                                <div className="totscore"> {this.renderScore()}</div>
                                <br/>
                                <div className="hints">HINTS
                                {this.renderHint()}
                                </div>
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}
