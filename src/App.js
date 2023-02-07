import React, { Component } from "react";

// class based component - App
class App extends Component {
  state = {
    name: "alina",
    age: 20,
    designation: "developer",
    arr: [90, 10, 20, 100],
    contact: {
      contactNumber: 9000000000,
      email: "admin@gmail.com",
    },
  };

  handleClick = () => {
    //this is referring to App

    //to update the state
    this.setState({
      name: "alex",
      designation: "manager",
    });
  };

  // whenever a state changes, re-rendering happens(render method is called again)
  render() {
    return (
      // this is referring to App
      //jsx -> javaScript syntax extension that allow us to write html syntax inside js
      <div>
        <h2>User Data</h2>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.designation}</p>

        <p>
          {this.state.arr.map((num) => {
            return <p>{num}</p>;
          })}
        </p>

        <h4>{this.state.contact.contactNumber}</h4>
        <p>Email: {this.state.contact.email} </p>

        <button onClick={this.handleClick}>Update</button>
      </div>
    );
  }
}

export default App;

//in html
{
  /* <button onclick="handleClick()">update</button> */
}

//reconcilation process
//diffing algo

//task
//create a array of object for employee data and display data in UI
//create a object and update it's property on click of a button
