import React, { Component } from "react";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
      name: "Fuad Semir"
  }
  handleOnChange = (e) =>{
    const name = e.target.value;
    this.setState({name});
  }
  render() {
      const {name, stateContent, propsContent} = {
          name: "Osman Semir",
          propsContent: "This component uses props for the user name",
          stateContent: "This component uses state for the user name"
      }
    return (
      <div>
        <UserOutput name={name} content={propsContent} />
        <UserOutput name={this.state.name} content={stateContent} />
        <UserInput handleChange={this.handleOnChange} initial={this.state.name} />
      </div>
    );
  }
}

export default App;
