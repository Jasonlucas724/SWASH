/**
*
* Main
*
*/

import React from 'react';

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
    return (
      <div>

      </div>
    );
  }
}

export default Main;
