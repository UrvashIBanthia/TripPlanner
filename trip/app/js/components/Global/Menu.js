//import React, { Component } from 'react';
//import 'node_modules/bootstrap/dist/css/bootstrap.css';
//import Navbar from 'react-navbar';
//import NavBar from './Nav.js';
//import data from './data.js';
var React=require('react');
//var Component=require('react');
var NavBar=require('./Nav.js');
var data=require('./data.js');
var Menu=React.createClass({
  /*generateItem(item){
   return (<NavBarItem text={item.text} url={item.url} submenu={item.submenu} />
   );
 }*/
  render: function() {
  //  var items = this.props.items.map(this.generateItem);
    return (
      <NavBar items={data}/>



    );
  }
});
module.exports=Menu;
