import React, { Component } from 'react'
import ColorPicker from '../components/colorPicker'
import Result from '../components/result'
import Reset from '../components/reset'
import SizeSetting from '../components/sizeSetting'
import Link from 'next/link'
import Head from 'next/head'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 12
        }
        //  this.onSetColor = this.onSetColor.bind(this);
    }
    onSetColor = (params) => {
        this.setState({
            color: params
        })
    }
    onChangeSize1 = (value) => {
        this.setState({
            fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
        })
    }
    onSettingDefault = (value) => {
        if (value) {
            this.setState({
                color: 'red',
                fontSize: 16
            })
        }
    }
    render() {
        return (
            <div className="root">
                <Head>
                    <title>SETTING-TEXT</title>
                    <link rel="stylesheet" href="../App.css"></link>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
                </Head>
                <div className="container mt-50">
                    <div className="row">
                        <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <SizeSetting
                                font={this.state.fontSize}
                                onChangeSize={this.onChangeSize1}
                            />
                            <Reset onSettingDefault={this.onSettingDefault} />
                        </div>
                    </div>
                    <Result color={this.state.color} font={this.state.fontSize} />
                </div>
            </div>
        )
    }
}
export default App
