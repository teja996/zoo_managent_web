import React from "react";
import "./index.css";

class Delete extends React.Component {
  state = {
    id: null,
  };

  handlechange = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  handlesubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: this.state.id,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          index:
          <input
            placeholder="id-1..."
            value={this.state.id}
            onChange={this.handlechange}
          />
          <button
            className="delbutton"
            type="submit"
            onClick={this.handlesubmit}
          >
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default Delete;
