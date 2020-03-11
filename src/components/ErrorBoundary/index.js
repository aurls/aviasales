import React from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../ErrorMessage';
import './error-boundary.scss';

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hasReactError: false
    };
  }

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

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired
};

export default ErrorBoundary;
