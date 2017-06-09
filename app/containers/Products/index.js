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
      height:"100px",
      backgroundSize:"cover",
      justifyContent:"space-between",
      background:"rgba(0,0,0,.5)",

    }
    const logoStyle={
      width:"200px",
      height:"200px",

      backgroundSize:"cover"
    }
    const navLink={
      textDecoration:"0",
      display:"flex",
      color:"#000000",
      fontSize:"18px",
      fontFamily:"Railway"

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


    const banner={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"1500px",
      justifyContent:"space-around",
      justifyContent:"center",
      backgroundImage: "url(http://h4z.it/Image/55ec15_rouse-199230.jpg)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover",

    }
    const columnOne={
      width:"100%",
      height:"200px",
      background:"#000000"

    }
    const columnTwo={


    }
    const columnThree={


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
            <div style={banner}></div>
            <p style={columnOne}></p>
            <p style={columnTwo}></p>
          </main>






          </div>

      </div>
    );
  }
}
