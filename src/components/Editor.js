import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Editor extends Component {
  static propTypes = {
    markdownSource: PropTypes.string.isRequired,
    onEditorContentsModified: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <textarea
          name='editor'
          id='editor'
          value={this.props.markdownSource}
          onChange={this.props.onEditorContentsModified}
        />
      </div>
    );
  }
}

export default Editor;
