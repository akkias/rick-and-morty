import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.error) {
      return <h4>Something went wrong</h4>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
