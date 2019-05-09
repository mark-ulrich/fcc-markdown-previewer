import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';

import '../../css/pane.css';

export class Pane extends Component {
  static propTypes = {
    name: PropTypes.string,
    title: PropTypes.string.isRequired,
    contentComponent: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: true,
      isMaximized: false
    };
  }

  render() {
    const id = this.props.name ? `pane-${this.props.name.toLowerCase()}` : '';
    const className = 'pane';

    return (
      <div className={className} id={id}>
        <TitleBar title={this.props.title} />
        <div className='pane-content-component'>
          {this.props.contentComponent}
        </div>
      </div>
    );
  }
}

export default Pane;
