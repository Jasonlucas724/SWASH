/*
 *
 * Products
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';


export default class Products extends React.PureComponent {
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
    const grid={
      display:"flex",
      flexDirection:"row",
      alignItems:"space-around",
      justifyContent:"space-around",
      width:"100%",
      height:"200px",

    }
    const boxOne={
      width:"150px",
      height:"150px",
      background:"#000000",
      marginTop:"500px",
      background:"url(https://www.belounge.fr/wp-content/uploads/pagode-gris-clair-150x150.png)"

    }
    const boxTwo={
      width:"150px",
      height:"150px",
      background:"#000000",
      marginTop:"500px",
      background:"url(https://vignette2.wikia.nocookie.net/thehuntergame/images/2/24/Large_equipment_tent_alpine_camouflage_256.png/revision/latest/scale-to-width-down/150?cb=20160304221428)",


    }
    const boxThree={
      width:"150px",
      height:"150px",
      background:"#000000",
      marginTop:"500px",
      background:"url(http://gypsytents.com/UploadedFiles/ProductHomeThumb/Tents_Expedition_BLIZZARD-%20IV_Image.png)",


    }


    return (
      <div>
        <Helmet title="Products" meta={[ { name: 'description', content: 'Description of Products' }]}/>


        <header>
          <div>
            <nav style={navBar}>
              <p style={logoStyle}></p>
              <Link to="/" style={navLink}>Home</Link>
              <Link to="/Products" style={navLink}>Products</Link>
              <Link to="/About" style={navLink}>About</Link>
              <Link to="/Contact" style={navLink}>Info</Link>
            </nav>
          </div>
        </header>




        <div>
        <main style={grid}>
         <div style={boxOne}></div>
         <div style={boxTwo}></div>
         <div style={boxThree}></div>


        </main>
        </div>


      </div>
    );
  }
}
