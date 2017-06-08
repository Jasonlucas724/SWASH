/*
 *
 * Products
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';



export default class Products extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      boxOne:"",
      boxTwo:"",
      boxThree:"",
    }
  }
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
      height:"300px",
      background:"url(http://fortheloveofwanderlust.com/wp-content/uploads/2014/08/campfire5.jpg)",
      backgroundSize:"cover",
      justifyContent:"space-between",
      position:"fixed",
      top:"0",
    }
    const logoStyle={
      width:"200px",
      height:"200px",
      background:"upl()",
      backgroundSize:"cover"
    }
    const navLink={
      textDecoration:"0",
      display:"flex",
      color:"#000000",
      fontSize:"18px",
      fontFamily:"Roboto, sans serif"

    }


    const mainStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around"
    }
    const boxOne={
      display:"flex",
      flexDirection:"column",
      width:"300px",
      height:"300px",
      background:"url()",
      backgroundSize:"cover",
      marginTop:"500px"
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
    const price={
      display:"flex",
      fontSize:"30px",
      justifyContent:"center",
      color:"#ffffff",
      fontFamily:"Roboto, sans serif",
      padding:"10px",
      marginTop:"20px"

    }
    const buttonStyle={
     width:"100px",
     alignSelf:"center",
     background:"green",
     marginTop:"30px"
    }



    return (
      <div>
        <Helmet title="Products" meta={[ { name: 'description', content: 'Description of Products' }]}/>

          <div>
            <header style={navBar}>
              <p style={logoStyle}></p>
              <Link to="/Products" style={navLink}>Products</Link>
              <Link to="/About" style={navLink}>About</Link>
              <Link to="/Contact" style={navLink}>Contact</Link>
            </header>


            <main style={mainStyle}>
              <div style={boxOne}>
              </div>
            
            </main>
          </div>

      </div>
    );
  }
}
