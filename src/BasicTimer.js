import React, { Component } from 'react';

class BasicTimer extends Component {

  ticking(){
    this.setState({
        clock: new Date() - this.props.start
      })
  }

  constructor(props) {
    super(props);

    this.state = {
      clock:0,
      incrementTime:10
    };
    this.ticking = this.ticking.bind(this);
  }

  componentDidMount() {
    this.BasicTimer = setInterval(this.ticking,1000)
  }

  render() {
    var clock = Math.round(this.state.clock / 1000);
    var deadline = new Date("dec 31, 2018 15:37:25").getTime();
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    return (
      <div className="App">

       <div>
        <h1>Countdown Timer</h1>
          <div id="clockdiv">
            <div>
              <span className="days" id="day">{days}</span>
              <div className="smalltext">Days</div>
            </div>
            <div>
              <span className="hours" id="hour">{hours}</span>
              <div className="smalltext">Hours</div>
            </div>
            <div>
              <span className="minutes" id="minute">{minutes}</span>
              <div className="smalltext">Minutes</div>
            </div>
            <div>
              <span className="seconds" id="second">{seconds}</span>
              <div className="smalltext">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicTimer;
