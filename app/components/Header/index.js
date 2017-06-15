/**
*
* Header
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from 'react-router';
import Menu from 'material-ui/svg-icons/navigation/Menu';
import TextField from 'material-ui/TextField';
import Person from 'material-ui/svg-icons/social/person';
import Description from 'material-ui/svg-icons/action/description';
import AccountBalance from 'material-ui/svg-icons/action/account-balance';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Assignment from 'material-ui/svg-icons/action/assignment';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Toggle from 'material-ui/Toggle';
import FlatButton from "material-ui/FlatButton";
import RaisedButton from 'material-ui/RaisedButton';

class Header extends React.PureComponent {
  constructor(props){
  super(props);
  this.state={
    email:"",
  }
}
    handleEmail = (event) => {
    this.setState({
    email:event.target.value
  })
}

    storeContact = () => {
    var data = new FormData ();
    data.append("email", this.state.email);

    fetch("http://localhost:8000/api/storeEmail",{
    method:"post",
    body:data
  })
    .then(function(response){
    return response.json();
  })
    .then(function(json){
    if(json.success){
    this.setState({
    email:""

  })
    alert(json.success);
  }

    else if (json.error){
    alert(json.error);
  }
  }.bind(this))
}
  render() {
    return (
      const headerStyle={
        display:"flex",
        minHeight:"100vh",
        background:"url(http://h4z.it/Image/644192_betten-40145.jpg)",
        backgroundSize:"cover",
        width:"100%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }
      const navBar={
        display:"flex",
        flexDirection:"row",
        width:"100%",
        height:"100px",
        justifyContent:"space-between",
        position:"fixed",
        top:"0",
        background:"rgba(0,0,0,.5)",
      }
      const logoStyle={
        width:"200px",
        height:"50px",
        marginTop:"30px",
        color:"#ffffff",
        background:"url(http://h4z.it/Image/80b7ee_swash.png)",
        backgroundSize:"100%,",
        marginLeft:"50px",
        fontSize:"30px",

      }
      const navLink={
        textDecoration:"0",
        display:"flex",
        flexDirection:"column",
        padding:"15px",
        marginTop:"25px",
        color:"#000000",
        fontSize:"18px",
        fontFamily:"Roboto, sans serif",
        color:"#ffffff"
      }
      const boxOne={
        display:"flex",
        flexDirection:"column",
        width:"300px",
        height:"300px",
        color:"#F28705",
        margin:"0 auto",

      }
      const heading={
        display:"flex",
        fontSize:"25px",
        justifyContent:"center",
        color:"#ffffff",
        fontFamily:"Roboto, sans serif",
        padding:"10px",
        marginTop:"20px"


      }
      const parStyle1={
       display:"flex",
       fontSize:"15px",
       justifyContent:"center",
       color:"#ffffff",
       fontFamily:"Roboto, sans serif",
       padding:"10px",
       marginTop:"20px"

      }
      const h1={
        fontFamily:"Roboto, sans serif",
        fontSize:"80px",
        alignSelf:"center"
      }
      const paragraphStyle={
       display:"flex",
       fontSize:"25px",
       justifyContent:"row",
       color:"#ffffff",
       fontFamily:"Roboto, sans serif",
       textAlign:"center",
       width:"300px",
       height:"100px"


      }
      <div>
        <Responsive minDeviceWidth={1024}>
          <div>
          <header style={headerStyle}>
            <nav style={navBar}>
              <div style={logoStyle}></div>
              <Link to="/" style={navLink}>Home</Link>
              <Link to="/Products" style={navLink}>Products</Link>
              <Link to="/About" style={navLink}>About</Link>
              <Link to="/Contact" style={navLink}>Contact</Link>
            </nav>
          <div style={boxOne}>
            <div style={heading}></div>
            <div style={parStyle1}></div>
            <h1 style={h1}>Swashbuckler:</h1>
            <p style={paragraphStyle}>Swaggering or daring soldier or adventurer.</p>
          </div>
          </header>
          </div>
      </div>
      <Responsive minDeviceWidth={1024}>
        <div>
        <header style={headerStyle}>
          <nav style={navBar}>
            <div style={logoStyle}></div>
            <Link to="/" style={navLink}>Home</Link>
            <Link to="/Products" style={navLink}>Products</Link>
            <Link to="/About" style={navLink}>About</Link>
            <Link to="/Contact" style={navLink}>Contact</Link>
          </nav>
        <div style={boxOne}>
          <div style={heading}></div>
          <div style={parStyle1}></div>
          <h1 style={h1}>Swashbuckler:</h1>
          <p style={paragraphStyle}>Swaggering or daring soldier or adventurer.</p>
        </div>
        </header>
        </div>
      </div>

    );
  }
}

export default Header;
