import React from "react";
import "./index.css";

export default class Myfile extends React.Component {
  state = {
    id: null,
    name: null,
    healthy: "true",
    img: "NA",
  };

  handlechange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlesubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: this.state.id,
      name: this.state.name,
      healthy: this.state.healthy,
      img: this.state.img,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <p>
          id:
          <input
            name="id"
            placeholder="id..."
            value={this.state.id}
            onChange={this.handlechange}
          />
        </p>
        <form onSubmit={this.handlesubmit}>
          <div>
            name:
            <input
              name="name"
              placeholder="name..."
              value={this.state.name}
              onChange={this.handlechange}
            />
            health:
            <input
              name="healthy"
              placeholder="is healthy?.."
              value={this.state.healthy}
              onChange={this.handlechange}
            />
            image:
            <input
              name="img"
              placeholder="img..."
              value={this.state.img}
              onChange={this.handlechange}
            />
          </div>
          <button type="submit" onClick={this.handlesubmit}>
            submit
          </button>
        </form>
      </div>
    );
  }
}
