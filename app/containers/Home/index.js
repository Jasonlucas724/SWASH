/*
 *
 * Home
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




export default class Home extends React.PureComponent {
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
    const imageStyle={
      display:"flex",
      flexDirection:"row",

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
    const mainStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"space-around",
      marginTop:"100px",
    }
    const boxTwo={
      width:"300px",
      height:"300px",
      background:"url(http://www.yak-tribe.com/wp-content/uploads/fishingbuddy.jpg)",
      backgroundSize:"100% 100%"


    }
    const boxThree={
      width:"300px",
      height:"300px",
      background:"url(https://s-media-cache-ak0.pinimg.com/736x/46/ae/cc/46aecccb2f911c8bf1b6d2a96c6ee9b2.jpg)",



    }
    const boxFour={
      width:"300px",
      height:"300px",
      background:"url(https://images-na.ssl-images-amazon.com/images/I/61Bk-hUKwcL._SY300_.jpg)",



    }
    const h1={
      fontFamily:"Roboto, sans serif",
      fontSize:"80px",
      alignSelf:"center"
    }

    const article={
      fontSize:"20px",
      fontFamily:"Railway"
    }
    const h2={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"300px",
      justifyContent:"space-around",
      fontFamily:"Roboto, sans serif",
      fontSize:"20px",
    }
    const container={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"500px",
      justifyContent:"space-around",
      justifyContent:"center",
      backgroundImage: "url(http://awesomwallpaper.com/img1/C69A882C5159/beautiful-argentina-landscape.jpg)",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover",
    }
    const imageStyle2={
      backgroundSize:"cover",
      width:"600px",
      height:"400px",
      marginTop:"25px"

    }
    const article2={
      fontSize:"30px",
      fontFamily:"Railway",
      color:"#ffffff",
      alignSelf:"center"

    }
    const menu={
      display:"flex",
      flexDirection:"column",
      width:"100%",
      height:"300px",
      justifyContent:"space-around",
      fontFamily:"Roboto, sans serif",
      fontSize:"20px",

    }
    const menuStyle={
      fontSize:"10px",
      fontFamily:"Railway"

    }
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

    }
    const containerTwo={
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      width:"500px",
      height:"500px",
      alignItems:"center"
    }
    const wrapper={

    }
    const buttonStyle={
      margin:"12"

    }
    const button={
      margin:"12"

    }

    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
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


          <div style={mainStyle}>
            <div style={boxTwo}></div>
            <div style={boxThree}></div>
            <div style={boxFour}></div>
          </div>

          <div style={h2}>
            <h1 style={article} to="/Fishing Gear">Fishing Gear</h1>
            <h1 style={article} to="/Camping Gear">Camping Gear</h1>
            <h1 style={article} to="/Hiking Gear">Hiking Gear</h1>
          </div>

          <div style={container}>
            <div style={article2}>A company's best advantage should be a quality product offered at the right price.</div>
            <div style={imageStyle2}></div>
            <div style={article2}></div>


        </div>

        <div style={containerTwo}>
          <TextField style={wrapper}
            hintText="Email"
            /><br />
          <br />
          <TextField style={wrapper}
            hintText="Password"
            /><br />
          <TextField style={wrapper}
            id="Forgot Username Or Password"
            defaultValue="Forgot Username Or Password"
            /><br />
          <TextField style={wrapper}
            hintText="Send By Email"
            floatingLabelText="Forgot User ID"
            /><br />
          <TextField style={wrapper}
            defaultValue="Send By Email"
            floatingLabelText="Forgot Password"
            /><br />
        <div style={button}>
         <RaisedButton label="Log In" primary={true} style={buttonStyle} />
        </div>
        </div>





        <footer style={footer}>
          <div style={link}>
            <h1 style={copyright}>&copy; 2017 Web Design by Jason Lucas & Johnathan Marshall </h1>
          </div>
        </footer>
        </Responsive>
        </div>



        <Responsive maxDeviceWidth={1023}>
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


          <div style={mainStyle}>
            <div style={boxTwo}></div>
            <div style={boxThree}></div>
            <div style={boxFour}></div>
          </div>

          <div style={h2}>
            <Link style={article} to="/Tents">Tents</Link>
            <Link style={article} to="/LedLanterns">Led Lanterns</Link>
            <Link style={article} to="/Hammicks">Hammicks</Link>
          </div>

          <div style={container}>
            <div style={article2}>A company's best advantage should be a quality product offered at the right price.</div>
            <div style={imageStyle2}></div>
            <div style={article2}></div>

          </div>

            <div style={containerTwo}>
            <TextField style={wrapper}
              hintText="Email"
              /><br />
            <br />
            <TextField style={wrapper}
              hintText="Password"
              /><br />
            <TextField style={wrapper}
              id="Forgot Username Or Password"
              defaultValue="Forgot Username Or Password"
              /><br />
            <TextField style={wrapper}
              hintText="Send By Email"
              floatingLabelText="Forgot User ID"
              /><br />
            <TextField style={wrapper}
              defaultValue="Send By Email"
              floatingLabelText="Forgot Password"
              /><br />
            </div>

            <div style={button}>
             <RaisedButton label="Log In" primary={true} style={buttonStyle} />
            </div>



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
