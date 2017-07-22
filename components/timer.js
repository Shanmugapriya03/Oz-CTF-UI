import React from 'react';
export default class Timer extends React.Component{
    constructor(){
            super();
    };
    render(){
        var countdown =  120* 60 * 1000;
        var timerId = setInterval(function(){
            countdown -= 1000;
            var min = Math.floor(countdown / (60 * 1000));
            var sec = Math.floor((countdown -(min * 60 * 1000))/ 1000);
            if (countdown <=0) {
                alert("time over!!");
                clearInterval(timerId);
            } else {
                $("#countTime").html(min + "mins : " + sec+" secs");
            }
        }, 1000);
        return(
            <div>
                <p id="countTime"></p>
            </div>
        );
    }
}
