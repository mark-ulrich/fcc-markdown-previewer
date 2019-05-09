import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DefaultClassName = 'pane-titlebar';

export class TitleBar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const id = `pane-titlebar-${this.props.title}`;

    return (
      <div className={DefaultClassName} id={id}>
        <h2 className='title-bar-title'>{this.props.title}</h2>
      </div>
    );
  }
}

export default TitleBar;
