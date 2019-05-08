import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Preview extends Component {
  componentDidMount() {
    // Force an update to ensure the preview is displayed on app load
    this.forceUpdate();
  }

  componentDidUpdate(prevProps, prevState) {
    const preview = document.querySelector('#preview');
    preview.innerHTML = window.marked(this.props.markdownSource);
  }

  render() {
    return <div id='preview' />;
  }
}

Preview.propTypes = {
  markdownSource: PropTypes.string.isRequired
};

export default Preview;
