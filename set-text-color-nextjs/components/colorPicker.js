import React, { Component } from 'react'
import '../App.css'
class ColorPicker extends Component {
  
    constructor(props){
      super(props);
        this.state ={
          colors : ['red','green','blue','#ccc']
        };
      }
    
      showColor(color){
        return {
          backgroundColor : color
        };
      }
      //bắt màu
      setActiveColor(color){
        this.props.onReceiveColor(color);
      }
    render() {
      var elmColor = this.state.colors.map((color,index)=>{
        return <span key={index}
                 style={this.showColor(color)}
                 //con nhan tu cha dung props
                  className={this.props.color === color ? 'active' : ''}
                  onClick={()=>this.setActiveColor(color)}>
              </span>
      })
      return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card card-primary">
                <div className="card-heading">
                  <h3 className="card-title">Color Picker</h3>
                </div>
                <div className="card-body">
                  {elmColor}
                  <hr />
                </div>
              </div>
            </div>
      )
    }
  }
  export default ColorPicker
  
