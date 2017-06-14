/*
 *
 * Contact
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

import FaMenu from 'react-icons/lib/fa/align-justify';

export default class Contact extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      number:"",
      website:"",
      message:"",
    }
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  }
  handleNumber = (event) => {
    this.setState({
      number: event.target.value
    })
  }
  handleWebsite = (event) => {
    this.setState({
      website:event.target.value
    })
  }
handleMessage = (event) => {
  this.setState({
    message: event.target.value
  })
}


    storeContact = () => {
      var data = new FormData ();
      data.append("name", this.state.name);
      data.append("email", this.state.email);
      data.append("number", this.state.number);
      data.append("website", this.state.website);
      data.append("message", this.state.message);

    fetch("http://localhost8000/api/storeContact",{
      method:"post",
      body:data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      if(json.success){
        this.setState({
          name:"",
          email:"",
          number:"",
          website:"",
          message:"",
        })
        alert(json.success);
      }

      else if (json.error){
        alert(json.error);
      }
    }.bind(this))
  }

  storeEmail = () => {
    var data = new FormData ();

    data.append("email", this.state.email);

  fetch("http://localhost8000/api/storeEmail",{
    method:"post",
    body:data
  })
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    if(json.success){
      this.setState({
        name:"",
        email:"",
        number:"",
        website:"",
        message:"",
      })
      alert(json.success);
    }
    else if (json.error){
      alert(json.error);
    }
  }.bind(this))
}
  render() {
    const navBarStyle={
      display:"flex",
      backgroundSize:"cover",
      width:"100%",
      flexDirection:"row",
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
      backgroundSize:"cover",
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
    const containerOne={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"space-between",
      width:"100%",
      height:"100vh",
      background:"url(http://h4z.it/Image/013014_en-wu-115894.jpg)",
      backgroundSize:"cover"

    }
    const profileImageOne={
      display:"flex",
      flexDirection:"column",
      width:"200px",
      height:"200px",
      background:"#000000",
      marginTop:"300px",
      borderRadius:"50%"
    }
    const headingStyle={
      display:"flex",
      flexDirection:"column",
      width:"300px",
      height:"300px",
      marginTop:"550px",
      marginLeft:"-795px"

    }
    const heading={
      display:"flex",
      color:"#ffffff",
      fontSize:"20px"




    }
    const profileImageTwo={
      display:"flex",
      flexDirection:"column",
      marginLeft:"440px",
      width:"200px",
      height:"200px",
      background:"#000000",
      marginTop:"300px",
      borderRadius:"50%"
    }

    const containerTwo={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      width:"100%",
      height:"150px",
      background:"#000000"
    }

    const footer={
      display:"flex"

    }
    const copyright={
      display:"flex",
      justifyContent:"center",
      fontSize:"20px",
      marginTop:"100px"

    }


    return (
      <div>
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>
      <div>
      <Responsive minDeviceWidth={1024}>
      <header style={navBarStyle}>
        <nav style={navBar}>
          <FaMenu/>
        <div style={logoStyle}></div>
        <Link to="/" style={navLink}>Home</Link>
        <Link to="/Products" style={navLink}>Products</Link>
        <Link to="/About" style={navLink}>About</Link>
        <Link to="/Contact" style={navLink}>Contact</Link>
        </nav>
      </header>



      <main style={containerOne}>
        <div style={profileImageOne}></div>
        <div style={profileImageTwo}></div>
      <div style={headingStyle}>
        <div style={heading}>Jason Lucas</div>
      </div>
      </main>



      <footer style={containerTwo}>
      <div style={footer}>
        <h1 style={copyright}>&copy; 2017 Web Design by Jason Lucas & Johnathan Marshall  </h1>
      </div>
      </footer>






      </Responsive>
      </div>
      </div>


    );
  }
}
