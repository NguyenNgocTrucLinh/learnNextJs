import React, { Component } from 'react'
import '../App.css'
class SizeSetting extends Component {
    changeSize=(value)=>{
        this.props.onChangeSize(value)
    }
    render() {
      return (
          <div className="card card-warning">
                <div className="card-heading">
                  <h3 className="card-title">Size :{this.props.font} px</h3>
                </div>
                <div className="card-body">
                  <button type="button" className="btn btn-success" onClick={()=>this.changeSize(-2)}>Giảm</button>&nbsp;
                  <button type="button" className="btn btn-success" onClick={()=>this.changeSize(+2)}>Tăng</button>
                </div>
              </div>
      )
    }
  }
  export default SizeSetting