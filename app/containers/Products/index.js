/*
 *
 * Products
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Menu from 'material-ui/svg-icons/navigation/Menu';
import Toggle from 'material-ui/Toggle';
import FlatButton from "material-ui/FlatButton";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Person from 'material-ui/svg-icons/social/person';
import Description from 'material-ui/svg-icons/action/description';
import AccountBalance from 'material-ui/svg-icons/action/account-balance';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Assignment from 'material-ui/svg-icons/action/assignment';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';




export default class Products extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      boxOne:"",
      boxTwo:"",
      boxThree:"",
      dropDownValue:0
    }
  }

  handleChange = (event, index, value) => this.setState({dropDownValue:value});

  componentWillMount(){
    fetch("http://www.swashBox.com")
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      this.setState({
        boxOne:json[0],
      })
    }.bind(this))
  }
  render() {
    const navBar={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"100px",
      backgroundSize:"cover",
      justifyContent:"space-between",
      background:"rgba(0,0,0,.5)",

    }
    const logoStyle={
      width:"200px",
      height:"50px",
      marginTop:"25px",
      color:"#ffffff",
      background:"url(http://h4z.it/Image/80b7ee_swash.png)",
      backgroundSize:"100%,",
      marginLeft:"50px",
      fontSize:"50px",
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



    const heading={
      display:"flex",
      fontSize:"25px",
      justifyContent:"center",
      color:"#ffffff",
      fontFamily:"Roboto, sans serif",
      padding:"10px",
      marginTop:"20px"
    }
    const banner={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"1500px",
      justifyContent:"space-between",
      justifyContent:"center",
      backgroundImage: "url(http://h4z.it/Image/55ec15_rouse-199230.jpg)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize:"100%, 100%",

    }
    const parStyle1={
      display:"flex",
      flexDirection:"row",
      fontSize:"15px",
      color:"#ffffff",
      fontFamily:"Roboto, sans serif",
      marginTop:"30px",
      justifyContent:"space-between"
    }

    const boxOne={
      width:"200px",
      height:"200px",
      background:"url(http://img01.taobaocdn.com/bao/uploaded/i1/TB1MrEbFVXXXXbbXVXXXXXXXXXX_!!0-item_pic.jpg_200x200.jpg)",
      backgroundSize:"100%, 100%"
    }
    const boxTwo={
      width:"200px",
      height:"200px",
      background:"url(http://www.atlantamagazine.com/wp-content/uploads/sites/12/2014/10/1014_hikesgear_kburdg_oneuseonly-300x300.jpg)",
      backgroundSize:"100%, 100%"
    }
    const boxThree={
      width:"200px",
      height:"200px",
      background:"url(https://s-media-cache-ak0.pinimg.com/originals/75/7b/87/757b876c3d9e786906feb63bb1872eef.jpg)",
      backgroundSize:"100%, 100%"

    }
    const columnOne={
      width:"100%",
      height:"200px",
      background:"#000000"

    }
    const containerTwo={
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      width:"500px",
      height:"500px",
      alignItems:"center",
      marginTop:"50px"
    }
    const wrapper={
      display:"flex"

    }
    const buttonStyle={
      margin:"12"

    }
    const button={
      margin:"12"

    }
    const menuItem={
      flex:"1"
    }




    return (
      <div>
        <Helmet title="Products" meta={[ { name: 'description', content: 'Description of Products' }]}/>

          <div>
          <header>
          <div style={navBar}>
            <p style={logoStyle}></p>
            <Link to="/Products" style={navLink}>Products</Link>
            <Link to="/About" style={navLink}>About</Link>
            <Link to="/Contact" style={navLink}>Contact</Link>
          </div>
          </header>
          <main style={parStyle1}>
            <div style={boxOne}></div>
            <div style={boxTwo}></div>
            <div style={boxThree}></div>

          </main>

          <div style={containerTwo}>
            <DropDownMenu value={this.state.dropDownValue} onChange={this.handleChange}>
             <MenuItem value={1} primaryText="Camping Gear" />
             <MenuItem value={2} primaryText="Fishing Gear" />
             <MenuItem value={3} primaryText="Hiking Gear" />
           </DropDownMenu><br />
            <br />
            <TextField style={wrapper}
              hintText="Pick Gear Type"
              /><br />
            <TextField style={wrapper}
              id="Free 2-Day Shipping on orders $35+"
              defaultValue="Username"
              /><br />
            <TextField style={wrapper}
              hintText=""
              floatingLabelText="Password"
              /><br />
            <TextField style={wrapper}
              defaultValue="Send By Email"
              floatingLabelText="Forgot Password"
              /><br />
          <div style={button}>
           <RaisedButton label="Buy Now" primary={true} style={buttonStyle} />
          </div>
          </div>











          </div>


      </div>
    );
  }
}
