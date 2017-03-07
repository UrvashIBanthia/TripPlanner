import React, { Component } from 'react';

export default class NavBarLink extends Component{
  render() {
    return (
      <a href={this.props.url}>{this.props.text}</a>
    );
  }
}
