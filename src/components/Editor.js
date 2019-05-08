import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Editor extends Component {
  // componentDidMount() {
  //   const editor = document.querySelector('#editor');
  //   editor.value = DEFAULT_SOURCE;
  // }

  render() {
    return (
      <div>
        <textarea
          name='editor'
          id='editor'
          cols='30'
          rows='10'
          value={this.props.markdownSource}
          onChange={this.props.onEditorContentsModified}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  markdownSource: PropTypes.string.isRequired,
  onEditorContentsModified: PropTypes.func.isRequired
};

export default Editor;
