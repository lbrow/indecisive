import React, { Component } from 'react';
// import First from '../First';
class Fun extends Component {
constructor(props) {
    super(props);
    this.state        = { name: '' } ;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.currentTarget.value });
  }

render(){
    return(
        <div>
        <input type="text" onChange={ this.handleChange } />
        <div>{ this.state.name }</div>
      </div>
    )
}
}

export default Fun;


