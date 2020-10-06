import React from 'react';
import ErrorMessage from '../error-message';
import './error-boundary.scss';

type Props = {
  children: React.ReactNode
}

type State = {
  hasReactError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasReactError: false
  };

  componentDidCatch () {
    this.setState({
      hasReactError: true
    });
  }

  render () {
    const { hasReactError } = this.state;
    if (hasReactError) {
      return (
        <div className="error-boundary">
          <ErrorMessage />
        </div>);
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
