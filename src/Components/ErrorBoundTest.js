import React, { Component } from "react";

class ErrorBoundTest extends Component {
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      throw new Error("This is a test error for error boundaries.");
    }

    return <h1>No Error Occurred</h1>;
  }
}

export default ErrorBoundTest;
