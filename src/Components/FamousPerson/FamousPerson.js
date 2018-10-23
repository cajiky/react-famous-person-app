import React, { Component } from 'react';


class FamousPerson extends Component {

    state = {
        person: {
            name:'',
            role: ''
        }
    }


     handleChangeFor = (propertyName) => {
         return(event) => {
             this.setState({
                 person: {
                     ...this.state.person,
                     [propertyName]: event.target.value
                 }
             });
         }
     }
  render() {
    return (
      <div className="FamousPerson">
      <input onChange={this.handleChangeFor('name') } placeholder="Name" />
      <input onChange={this.handleChangeFor('role') } placeholder="Role" />   
      <p>{this.state.person.name} is famous for {this.state.person.role}</p> 
      </div>
    );
  }
}

export default FamousPerson;
