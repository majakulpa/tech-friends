import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooooops, this is not good...</h1>;
    }
    return this.props.children; //children, everything what is between error boundry
  }
}

export default ErrorBoundry;
