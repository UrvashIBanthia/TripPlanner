//import React, { Component } from 'react';
var React=require('react');
//var Component=require('component');
var NavBarLink=React.createClass({
  render:function() {
    return (
      <a href={this.props.url}>{this.props.text}</a>
    );
  }
});
module.exports=NavBarLink;
