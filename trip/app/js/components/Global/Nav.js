//import React, { Component } from 'react';
var NavBarItem =require('./navbarItem.js');
var React=require('react');

var NavBar=React.createClass({

 /*generateItem:function(){
     return (
     );
   },*/
  render:function() {

    var items = this.props.items.map(function(item){
      return (
        <NavBarItem text={item.text} url={item.url} submenu={item.submenu} />
      );
    });
    return(
      <ul className="menu">
      {items}
      </ul>
    );


  }
});
module.exports=NavBar;
