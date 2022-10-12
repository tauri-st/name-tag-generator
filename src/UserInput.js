import React, { Component } from "react";

class UserInput extends Component {
  state = { names: "" };
  updateName = (event) => {
     handleSubmit = (event) => {
        event.preventDefault();
        this.name({
            name: ""
        })
     }
     onChange={this.updateName}
  };
  render() {
    return (
      <div className="form">
        <form>
          <input type="text" placeholder="Add a new name here..." value="this.state" />
          <input type="submit" value="Create Name Tag" />
          onSubmit={this.handleSubmit}
        </form>
      </div>
    );
  }
}

export default UserInput;
