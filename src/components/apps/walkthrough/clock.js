import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        var date = this.getTimeString();
        this.state = {
            time: date
        }
    }

    getTimeString() {
        const date = new Date(Date.now()).toLocaleTimeString();    //pulls the local date (based on computer/timezone) and creates 
        return date;                                               // the date to be pulled inside the class
    }

    componentDidMount() {                   
        const _this = this;
        this.timer = setInterval(function () {        //setInterval(function () { }) has 2 variables, (var date and the setState, and then 1000
            var date = _this.getTimeString();    //this calls for setInterval to perform the _this.getTimeString() and _this.stateState to run
            _this.setState({                     //every 1000ms
                time: date
            })
        }, 1000)
    }

    componentWillUnmount() {    //lifecycle method of react
        clearInterval(this.timer);
    }

    render() {
        return (                                              //this ties in all the functions created above
            <div className="main">   
                <div className="mainDiv">
                    <h1>React Clock</h1>
                    <hr className="explanation" />
                    <p>{this.state.time}</p>                  
                </div>
            </div>
        )
    }
}


 