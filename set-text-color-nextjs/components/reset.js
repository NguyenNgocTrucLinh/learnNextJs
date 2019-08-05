import React, { Component } from 'react'
import '../App.css'
class Reset extends Component {
    onReset=()=>{
      this.props.onSettingDefault(true);
    }
    render() {
      return (
          <button type="button" className="btn btn-primary btn-reset" onClick={this.onReset}>Reset</button>
      )
    }
  }
  export default Reset;
  