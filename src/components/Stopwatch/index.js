import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    isTimerRunning: false,
  }

  tick = () => {
    const {minutes, seconds} = this.state
    if (seconds === 59) {
      this.setState({
        minutes: minutes + 1,
        seconds: 0,
      })
    } else {
      this.setState({
        seconds: seconds + 1,
      })
    }
  }

  onStart = () => {
    this.intervalId = setInterval(this.tick, 1000)
    this.setState({isTimerRunning: true})
  }

  onStop = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({
      minutes: 0,
      seconds: 0,
      isTimerRunning: false,
    })
  }

  render() {
    const {isTimerRunning, minutes, seconds} = this.state
    const displayMinutes = minutes.toString().padStart(2, '0')
    const displaySeconds = seconds.toString().padStart(2, '0')
    return (
      <div className="stopwatch-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="title-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="title">Timer</p>
          </div>
          <h1 className="stopwatch">
            {displayMinutes}:{displaySeconds}
          </h1>
          <div className="btn-card">
            <button
              type="button"
              className="button btn-start"
              onClick={this.onStart}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button btn-stop"
              onClick={this.onStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="button btn-reset"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
