import React from "react";
import "./App.css";

import Myfile from "./file";
import Delete from "./delete";

let animals = [
  {
    id: 1,
    name: "Bengal_Tiger",
    healthy: "true",
    img:
      "http://4.bp.blogspot.com/-Urk3zVyy0uM/T4aF0vmjeqI/AAAAAAAAFJM/YlUGfX8Foe8/s1600/bengal-tiger_1600x1200.jpg",
  },
  {
    id: 2,
    name: "Pecock",
    healthy: "true",
    img:
      "https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    id: 3,
    name: "Elephant",
    healthy: "true",
    img:
      "https://kids.nationalgeographic.com/content/dam/kidsea/kids-core-objects/backgrounds/youareleaving_kids.adapt.768.1.jpg",
  },
  {
    id: 4,
    name: "Deer",
    healthy: "true",
    img:
      "https://d.newsweek.com/en/full/1336950/deer-zombie-deer-chronic-wasting-disease.jpg",
  },
];

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      showlist: false,
      showedit: false,
      showdelete: false,
    };
  }

  increment = () => {
    if (animals.length - this.state.id > 1) {
      this.setState({
        id: this.state.id + 1,
      });
    }
  };

  decrement = () => {
    if (this.state.id > 0) {
      this.setState({
        id: this.state.id - 1,
      });
    }
  };

  addanimal = (props) => {
    if (props.id === null) animals[animals.length] = props;
    else animals[props.id - 1] = props;
    console.log(animals);
  };

  deleteanimal = (props) => {
    animals.splice(props.id, 1);
  };

  render() {
    return (
      <div className="App-body">
        <div className="listview">
          toggle button for:
          <button
            className="togglebutton"
            onClick={() => {
              this.setState({ showlist: !this.state.showlist });
            }}
          >
            list of animals
          </button>
          {this.state.showlist ? (
            <div>
              <h1> list of zoo animals and pictures:::</h1>
              <img
                style={{ width: 300, height: 200 }}
                src={animals[this.state.id].img}
              />
              <div>
                <div>index: {this.state.id}</div>
                <div>id: {animals[this.state.id].id}</div>
                <div>name: {animals[this.state.id].name}</div>
                <div>healthy: {animals[this.state.id].healthy}</div>
                <button onClick={this.decrement}>previous</button>
                <button onClick={this.increment}>next</button>
              </div>
            </div>
          ) : null}
        </div>
        <div>
          <br />
          toggle button for:
          <button
            className="togglebutton"
            onClick={() => {
              this.setState({ showedit: !this.state.showedit });
            }}
          >
            to add or edit
          </button>
          {this.state.showedit ? <Myfile onSubmit={this.addanimal} /> : null}
        </div>
        <br />
        <div>
          toggle button for:
          <button
            className="togglebutton"
            onClick={() => {
              this.setState({ showdelete: !this.state.showdelete });
            }}
          >
            to delete
          </button>
          {this.state.showdelete ? (
            <Delete onSubmit={this.deleteanimal} />
          ) : null}
        </div>
      </div>
    );
  }
}
