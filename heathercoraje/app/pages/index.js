import React from "react";
import DigitalClock from "../src/DigitalClock.js";

class Index extends React.Component {
  state = {
    time: new Date().toLocaleString()
  };

  tick() {
    this.setState(() => {
      return {
        time: new Date()
      };
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;
    console.log('time', time) //this is the source of the problem
    return <DigitalClock time={time} />;
  }
}

export default Index;
