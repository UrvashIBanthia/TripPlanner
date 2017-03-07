import React, { Component } from 'react';
import NavBarItem from './navbarItem.js';

export default class NavBar extends Component{
  console.log("Hey");
  function generateItem(){
     return (<NavBarItem text={this.props.text} url={this.props.url} submenu={this.props.submenu} />
     );
   }
  render() {

    var items = this.props.items.map(this.generateItem());
    return (
      <ul className="menu">
      {items}
      </ul>
    );
  }
}
