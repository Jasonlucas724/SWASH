/*
 *
 * Contact
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Contact extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      number:"",
      website:"",
      message:"",
    }
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  }
  handleNumber = (event) => {
    this.setState({
      number: event.target.value
    })
  }
  handleWebsite = (event) => {
    this.setState({
      website:event.target.value
    })
  }
handleMessage = (event) => {
  this.setState({
    message: event.target.value
  })
}


    storeContact = () => {
      var data = new FormData ();
      data.append("name", this.state.name);
      data.append("email", this.state.email);
      data.append("number", this.state.number);
      data.append("website", this.state.website);
      data.append("message", this.state.message);

    fetch("http://localhost8000/api/storeContact",{
      method:"post",
      body:data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      if(json.success){
        this.setState({
          name:"",
          email:"",
          number:"",
          website:"",
          message:"",
        })
        alert(json.success);
      }

      else if (json.error){
        alert(json.error);
      }
    }.bind(this))
  }

  storeEmail = () => {
    var data = new FormData ();

    data.append("email", this.state.email);

  fetch("http://localhost8000/api/storeEmail",{
    method:"post",
    body:data
  })
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    if(json.success){
      this.setState({
        name:"",
        email:"",
        number:"",
        website:"",
        message:"",
      })
      alert(json.success);
    }

    else if (json.error){
      alert(json.error);
    }
  }.bind(this))
}
  render() {
    return (
      <div>
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
