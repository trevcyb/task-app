import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
      tasknos: [],
      taskno: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
      tasknos: this.state.tasknos.concat(this.state.taskno + 1),
    });
  };

  deleteTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.splice(this.state.tasks, 1),
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter Task</label>
          <input 
          onChange={this.handleChange}
          value={task}
          type="text" 
          id="taskInput" 
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    )
  }
}

export default App;
