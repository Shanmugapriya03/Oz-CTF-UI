import React from 'react';
import ChallengeItem from './challengeItem'
import Timer from './timer';
import HintItem from './hintItem';
import axios from 'axios';
import * as constants from '../constants';
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
            question:null,
            eachScore:null,
			hints:null
        };

        this.renderItems = this.renderItems.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.renderScore = this.renderScore.bind(this);
        this.setSelected = this.setSelected.bind(this);
        this.renderHint= this.renderHint.bind(this);
    }
    renderHint(){
        var hints=[];
		let val = this.state.hints;
        for(let i in val){
            hints.push(<HintItem hname={val[i].hname} pointLoss={val[i].pointLoss}/>);
        }
        return hints;
    }
    renderItems(){
        var items=[];
        for (let i in this.state.challenges){
            items.push(<ChallengeItem hint={this.state.challenges[i].hint} name={this.state.challenges[i].name} score={this.state.challenges[i].score} content={this.state.challenges[i].content} question={this.state.challenges[i].question} setSelected={this.setSelected}/>);
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
	}
    renderContent(){
        if (this.state.selected != null){
            return (
                <div>
                    <div className="heading">
                        <h1>{this.state.selected} <span className="badge">{this.state.eachScore} pts</span></h1>
                    </div>
                    <div className="well well-lg question">
                        <p>{this.state.question}</p>
                    </div>
                    <div className="form-group col-lg-10">
                        <input type="text" className="form-control" placeholder="Enter flag here"></input>
                    </div>
                    <button type="button" className="btn btn-default btn-primary btn-lg" >submit</button>
                </div>
            );
        }else{
			return (
				<h3 className="select">Select a challenge to get started</h3>
			);
		}
    }
    renderScore(){
        var tot=0;
        for(let i in this.state.challenges){
            tot+=Number(this.state.challenges[i].score);
        }
        return tot;
    }
    setSelected(content, question, score, hint){
        this.setState({selected:content, question:question, eachScore:score, hints:hint});
    }
    render(){
        return (
            <span>
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
                                <Timer/>
                                <br/>
                                <div className="tot">Total Score</div>
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
