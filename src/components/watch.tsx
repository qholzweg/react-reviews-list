import { Component } from "react";

export class Watch extends Component {

  state = {
    time: new Date().toLocaleTimeString()
  }

  interval: ReturnType<typeof setInterval> | undefined;

  updateTime() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.updateTime(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className='watch p-4 rounded-lg'>
        <span className="time text-xl text-white">{this.state.time}</span>
      </div>
    );
  }
}