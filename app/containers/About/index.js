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
      width:"80px",
      height:"100px",
      color:"#ffffff",
      marginTop:"40px",
      fontFamily:"Railway",
      fontSize:"20px"

    }
    const bannerStyle={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"100px",
      marginTop:"300px",
      justifyContent:"center"

    }
    const banner={
      width:"700px",
      height:"500px",
      background:"url(http://h4z.it/Image/06841c_4598_960_720.png)",
      backgroundSize:"100% 100%"


    }
    const paragraphStyle={
      display:"flex",
      flexDirection:"column",
      width:"100%",
      height:"500px",
      justifyContent:"center"

    }
    const paragraph={
      alignSelf:"center",
      fontSize:"25px",
      color:"#FF9736",
      marginTop:"800px"

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

      <main>
      <div style={bannerStyle}>
        <div style={banner}></div>
      </div>
      </main>


      <div style={paragraphStyle}>
        <p style={paragraph}>We are a company based out of Augusta, Georgia.
        <br/>We offer quality experience in expertly packing,
        <br/> crating, and shipping just about anything to nearly anywhere.
        <br/> Our location provides one-stop service, including pick-up and delivery.
        <br/>When you have high value, heavy, fragile, and unique items to ship, you can be sure Craters & Freighters is your resource.</p>
      </div>




      </div>
    );
  }
}
