import React, { Component } from "react";

export class ChildPropsClass extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h2>this is child component</h2>
        <h2>hello {this.props.eknaam}</h2>
      </div>
    );
  }
}
