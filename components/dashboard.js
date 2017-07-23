import React from 'react';
import ChallengeItem from './challengeItem'
import Timer from './timer';
export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            challenges: [
                {name:"Challenge 1", score:"100" ,content:"challenges--1",question:"Question----1 goes here........."},
                {name:"ch2", score:"1000" ,content:"challenges--2",question:"Question----2 goes here........."},
                {name:"ch3",score:"500" ,content:"challenges--3",question:"Question----3 goes here........."},
            ],
            selected:null,
            question:null
        };

        this.renderItems = this.renderItems.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.renderScore = this.renderScore.bind(this);
        this.setSelected = this.setSelected.bind(this);
    }
    renderItems(){
        var items=[];
        for (let i in this.state.challenges){
            items.push(<ChallengeItem name={this.state.challenges[i].name} score={this.state.challenges[i].score} content={this.state.challenges[i].content} question={this.state.challenges[i].question} setSelected={this.setSelected}/>);
        }
        return items;
    }
    renderContent(){
        if (this.state.selected != null){
            return (
                <div>
                    <h1> {this.state.selected }</h1>
                    <p>{this.state.question}</p>
                        <div class="form-group">
                            <label for="comment">Answer:</label>
                            <input class="form-control"></input>
                        </div>
                </div>
            );
        }else{
			return (
				<h3>Select a challenge to get started</h3>
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
    setSelected(val1,val2){
        this.setState({selected:val1,question:val2});
    }
    render(){
        return (
            <span>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2  verNav list-scroll">
                            <div className="col-md-offset-1 col-md-10 col-md-offset-1">
                                {this.renderItems()}
                            </div>
                        </div>

                        <div className="col-md-8">
                            {this.renderContent()}
                        </div>

                        <div className="col-md-2">
                            <Timer/>
                            <b>Total Score</b>
                            {this.renderScore()}
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}
