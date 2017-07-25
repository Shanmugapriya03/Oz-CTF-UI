import React from 'react';
import Nav from './nav';
export default class LeaderBoard extends React.Component{
    render(){
        return(
            <div className="container-fluid board">
                <div className="leader">
                    <h3>Leader Board</h3>
                </div>
                <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>Mary</td>
                        <td>120</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>July</td>
                        <td>100</td>
                        <td>40</td>
                      </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
