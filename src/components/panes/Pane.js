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

  componentDidUpdate() {
    const id = this.props.name ? `pane-${this.props.name.toLowerCase()}` : '';
    const pane = document.getElementById(id);

    const otherPanes = Array.from(
      document.getElementsByClassName('pane')
    ).filter((pane) => pane.id !== id);

    if (this.state.isMaximized) {
      // Force expanded state
      if (!this.state.isExpanded) {
        this.setState({ isExpanded: true });
      }

      // Hide all other panes
      otherPanes.forEach((pane) => pane.classList.add('pane-hidden'));

      // Add .pane-maximized class to this pane
      pane.classList.add('pane-maximized');
    } else {
      // Show all other panes
      otherPanes.forEach((pane) => pane.classList.remove('pane-hidden'));

      // Remove .pane-maximized class from this pane
      pane.classList.remove('pane-maximized');
    }
  }

  /**
   *  Toggle pane between normal and maximized state
   */
  toggleMaximized = () => {
    console.log('max');
    const isMaximized = !this.state.isMaximized;
    this.setState({ isMaximized });
  };

  /**
   *  Toggle pane between expanded and contracted state
   */
  toggleExpanded = () => {
    const isExpanded = !this.state.isExpanded;
    this.setState({ isExpanded });
  };

  render() {
    const id = this.props.name ? `pane-${this.props.name.toLowerCase()}` : '';
    const className = 'pane';

    const contentComponent = this.state.isExpanded ? (
      <div className='pane-content-component'>
        {this.props.contentComponent}
      </div>
    ) : (
      <div />
    );

    return (
      <div className={className} id={id}>
        <TitleBar
          title={this.props.title}
          isMaximized={this.state.isMaximized}
          toggleMaximized={this.toggleMaximized}
          isExpanded={this.state.isExpanded}
          toggleExpanded={this.toggleExpanded}
        />
        {contentComponent}
      </div>
    );
  }
}

export default Pane;
