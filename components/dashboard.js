import React from 'react';
import ChallengeItem from './challengeItem'
export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            challenges: [
                {name:"ch1", score:"100"},{name:"ch2", score:"1000"},{name:"ch3",score:"500"}
            ],
            selected:null
        };


        this.renderItems = this.renderItems.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.setSelected = this.setSelected.bind(this);
    }
    renderItems(){
        var items=[];
        for (let i in this.state.challenges){
            items.push(<ChallengeItem name={this.state.challenges[i].name} score={this.state.challenges[i].name} setSelected={this.setSelected}/>);
        }
        return items;
    }
    renderContent(){
        if (this.state.selected != null){

            return (
                <h1> {this.state.selected }</h1>
            );
        }
        return null;
    }
    setSelected(val){
        this.setState({selected:val});
    }
    render(){
        return (
            <span>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            {this.renderItems()}
                        </div>

                        <div className="col-md-9">
                            {this.renderContent()}
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}
