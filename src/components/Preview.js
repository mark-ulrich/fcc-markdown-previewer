import React, { Component } from 'react';
import PropTypes from 'prop-types';

const marked = window.marked;

export class Preview extends Component {
  static propTypes = {
    markdownSource: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.markedRenderer = new window.marked.Renderer();
    this.markedRenderer.link = (href, title, text) => {
      return `
        <a href=${href} target='_blank'>${text}</a>
      `;
    };
  }

  componentDidMount() {
    // Force an update to ensure the preview is displayed on app load
    this.forceUpdate();
  }

  componentDidUpdate() {
    const preview = document.querySelector('#preview');

    marked.setOptions({
      breaks: true
    });
    preview.innerHTML = marked(this.props.markdownSource, {
      renderer: this.markedRenderer
    });
  }

  render() {
    return <div id='preview' />;
  }
}

export default Preview;
