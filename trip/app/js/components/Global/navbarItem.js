//import React, { Component } from 'react';
//import NavBarLink from './navbar.js';
var React=require('react');
//var Component=require('component');
var NavBarLink=require('./navbar.js');
var Menu=React.createClass({
  generateLink:function(){
      return( <NavBarLink url={this.props.url} text={this.props.text} />
      );
    },

     generateSubmenu:function(){
    //We generate a simple Navbar (the parent).
    //Spoilers: it takes items as its argument.
      return (<NavBar items={this.props.submenu} />
      );
    },

    generateContent:function(){
      var content = [this.generateLink()];
      if(this.props.submenu){
        //If there is a submenu in our data for this item
        //We add a generated Submenu to our content
        content.push(this.generateSubmenu());
      }
      return content;
    },

    render:function(){
     var content = this.generateContent();
     return (
       <li>
         {content}
       </li>
     );
   }
});
module.exports=Menu;
