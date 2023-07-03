import React from "react";

class App extends React.Component {
    state = {
        count: 0
    }

    timerId = null;

    startOrStopTimer = (e) => {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
            e.target.textContent = "Start"
            return;
        }
        this.timerId = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000);
        e.target.textContent = "Stop"
    };

    reset = () => {
        this.setState({count: this.state.count = 0});
    }

    render() {
        return (
            <div className="App" style={{margin: "auto", width: 200, textAlign: "center"}}>
                <h1>React Timer</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.startOrStopTimer}>Start</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default App;
