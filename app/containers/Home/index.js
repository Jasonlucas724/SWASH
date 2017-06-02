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




export default class Home extends React.PureComponent {
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
      width:"550px",
      height:"500px",
      marginTop:"30px",
      color:"#ffffff",
      backgroundSize:"100% 100%",
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
      background:"url(http://www.grandforksherald.com/sites/default/files/styles/square_300/public/field/image/Camping-Tent_2.jpg?itok=e0KYNrmP)",
      backgroundSize:"100% 100%"


    }
    const boxThree={
      width:"300px",
      height:"300px",
      background:"url(http://www.bestsolarlighting.com/wp-content/uploads/2017/05/ThorFire-Solar-LED-USB-Rechargeable-Camping-Lantern-300x300.jpg)",



    }
    const boxFour={
      width:"300px",
      height:"300px",
      background:"url(https://images-na.ssl-images-amazon.com/images/S/aplus-seller-content-images-us-east-1/ATVPDKIKX0DER/A1YFTV540Q9MWH/B00PT10RSA/V1fh6sVQcmS._UX300_TTW_.jpg)",



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
      justifyContent:"center"

    }
    const imageStyle2={
      background:"url(http://h4z.it/Image/d8b85c_4598_960_720.png)",
      backgroundSize:"cover",
      width:"600px",
      height:"400px"

    }
    const article2={
      fontSize:"20px",
      fontFamily:"Railway"

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
      background:"url(http://blogs.burton.com/blogs/media/images/17BG-AnnieJ-06.2e16d0ba.fill-1000x800-c75.jpg)",
      backgroundSize:"cover",
      width:"100%",
      height:"800px"

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
              <Link to="/Home" style={navLink}>Home</Link>
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
            <div style={article}>SWASH TENTS</div>
            <div style={article}>LED LATTERNS</div>
            <div style={article}>HAMMICKS</div>
          </div>

          <div style={container}>
            <div style={article2}></div>
            <div style={imageStyle2}></div>
            <div style={article2}></div>

          </div>
          <div style={menuStyle}>
          <ul style={menu} class="side-nav header-links">
	           <li><a data-wsid="ws-signin" class="signInLink" href="/my_account/index.jsp">Sign In</a></li>	<li><a data-wsid="ws-register" href="/my_account/index.jsp">Register</a></li>
	           <li><a href="/catalog_request/index.jsp">Request A FREE Catalog</a></li>
					<div class="show-for-small">
						 <li><a data-reveal-id="emailSignUp" href="#" data-wsid="ws-emailsignup">Sign Up For Email Offers</a></li>
					</div>
						<li><a href="/shopCatalogs">Shop Our Catalogs</a></li>

						<li data-wsid="ws-quickorderEF"><a data-wsid="ws-quickorder" href="/catalog/catalog_quick_order.jsp">Quick Order Form</a></li>
						<li data-wsid="ws-manageaccountEF"><a data-wsid="ws-manageaccount" href="/my_account/manage_account.jsp">Your Account</a></li>
	          <li><a href="/my_account/order_history/order_history_listing.jsp">Order Status</a></li>
	          <li><a href="/content/faq">Frequently Asked Questions</a></li>
	          </ul>

            <footer style={footer}>
              <div style={link}></div>
            </footer>
            </div>












        </Responsive>
        </div>

      </div>
    );
  }
}
