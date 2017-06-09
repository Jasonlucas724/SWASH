/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

export default class About extends React.PureComponent {
  render() {
    const navBar={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"100px",
      justifyContent:"space-between",
      alignitems:"space-between",
      position:"fixed",
      top:"0",
      background:"rgba(0,0,0,.5)",
    }
    const logo={
      width:"100px",
      height:"100px",

    }
    const navLink={
      width:"80px",
      height:"100px",
      color:"#ffffff",
      marginTop:"20px",
      fontFamily:"Railway",
      fontSize:"20px"

    }
    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

      <header style={navBar}>
        <div style={logo}></div>
        <Link to="/Products" style={navLink}>Products</Link>
        <Link to="/Info" style={navLink}>Info</Link>
        <Link to="/About" style={navLink}>About</Link>
      </header>
      </div>
    );
  }
}
