import React, { Component } from "react";
import { ChildPropsClass } from "./ChildPropsClass";

export class ParentPropsClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "mike",
    };
  }
  render() {
    return (
      <div>
        <h1>this is parent component</h1>
        <ChildPropsClass />
      </div>
    );
  }
}
