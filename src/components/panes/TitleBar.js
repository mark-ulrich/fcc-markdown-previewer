import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DefaultClassName = 'pane-titlebar';

export class TitleBar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    isMaximized: PropTypes.bool.isRequired,
    toggleMaximized: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    toggleExpanded: PropTypes.func.isRequired
  };

  render() {
    const id = `pane-titlebar-${this.props.title}`;
    const maxIcon = this.props.isMaximized
      ? 'fa-window-minimize'
      : 'fa-window-maximize';
    const expandedIcon = this.props.isExpanded
      ? 'fa-caret-down'
      : 'fa-caret-right';

    return (
      <div className={DefaultClassName} id={id}>
        <div className='pane-expand-icon' onClick={this.props.toggleExpanded}>
          <i className={`pane-titlebar-icon fas ${expandedIcon} fa-2x`} />
        </div>
        <h2 className='title-bar-title'>{this.props.title}</h2>
        <div className='pane-titlebar-icon-container'>
          <div
            className='pane-titlebar-icon pane-titlebar-icon-minmax'
            onClick={this.props.toggleMaximized}
          >
            <i className={`far ${maxIcon} fa-2x`} />
          </div>
        </div>
      </div>
    );
  }
}

export default TitleBar;
