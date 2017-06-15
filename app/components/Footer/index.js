/**
*
* Footer
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

class Footer extends React.PureComponent {
  render() {
    const footer={
      display:"flex",
      flexDirection:"column",
      width:"100%",
      height:"200px",

    }
    const link={
      background:"#ffffff",
      backgroundSize:"cover",
      width:"100%",
      height:"800px"

    }
    const copyright={
      display:"flex",
      justifyContent:"center",
      fontSize:"20px",
      marginTop:"100px"


    return (
      <div>
      <Responsive maxDeviceWidth={1023}>
      <footer style={footer}>
        <div style={link}>
          <h1 style={copyright}>&copy; 2017 Web Design by Jason Lucas & Johnathan Marshall</h1>
        </div>
      </footer>
      </Responsive>

      <Responsive minDeviceWidth={1024}>
      <footer style={footer}>
        <div style={link}>
          <h1 style={copyright}>&copy; 2017 Web Design by Jason Lucas & Johnathan Marshall</h1>
        </div>
      </footer>
      </Responsive>
      </div>
    );
  }
}

export default Footer;
