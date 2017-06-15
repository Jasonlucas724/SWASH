/**
*
* Main
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

class Main extends React.PureComponent {
  constructor(props){
  super(props);
  this.state = {
    boxOne:"",
    boxTwo:"",
    boxThree:"",
  }
}
componentWillMount(){
  fetch("http://digimortaldesigns.org/api/getArticles")
  .then(function(res){
    return res.json();
  })
  .then(function(json){
    this.setState({

    })
  }.bind(this))
}
  render() {
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
    const h2={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"300px",
      justifyContent:"space-around",
      fontFamily:"Roboto, sans serif",
      fontSize:"20px",
    }
    const article={
      fontSize:"20px",
      fontFamily:"Railway"
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
    const wrapper={
      display:"flex"
    }
    const buttonStyle={
      margin:"12"

    }
    const button={
      margin:"12"

    }
    return (
      <div>
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


      </div>
    );
  }
}

export default Main;
