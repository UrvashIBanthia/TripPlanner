import React, { Component } from 'react';
//import 'node_modules/bootstrap/dist/css/bootstrap.css';
//import Navbar from 'react-navbar';
import NavBar from './Nav.js';
import data from './data.js';
export default class Menu extends Component {
  /*generateItem(item){
   return (<NavBarItem text={item.text} url={item.url} submenu={item.submenu} />
   );
 }*/
  render() {
  //  var items = this.props.items.map(this.generateItem);
    return (
      <Navbar items={data}/>



    );
  }
}
