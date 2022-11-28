import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="grid place-items-center h-screen">
          <h2 className="text-3xl text-white">Something went wrong.</h2>
          <p className="text-lg text-red-500 font-bold">Check console</p>
        </div>
      );
    }

    return this.props.children;
  }
}
