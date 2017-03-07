import React, { Component } from 'react';
import NavBarLink from './navbar.js';
export default class NavBarItem extends Component {
  function generateLink(){
    return( <NavBarLink url={this.props.url} text={this.props.text} />
    );
  }

  function generateSubmenu(){
  //We generate a simple Navbar (the parent).
  //Spoilers: it takes items as its argument.
    return (<NavBar items={this.props.submenu} />
    );
  }

  function generateContent(){
    var content = [this.generateLink()];
    if(this.props.submenu){
      //If there is a submenu in our data for this item
      //We add a generated Submenu to our content
      content.push(this.generateSubmenu());
    }
    return content;
  }

  render() {
   var content = this.generateContent();
   return (
     <li>
       {content}
     </li>
   );
 }

}
