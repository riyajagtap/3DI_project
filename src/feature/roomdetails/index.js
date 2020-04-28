import React, { Component } from 'react'
import Roomdetaillist from './Roomdetaillist'
import './pop.css'

export default class RoomDetails extends Component {
    render() {
            return (
                  <div className='popup'>
                    <div className='popup-inner'>
                      <h1>{this.props.text}</h1>
                      <Roomdetaillist></Roomdetaillist>
                    <button onClick={this.props.closePopup}>close me</button>
                    </div>
                  </div>
            );
    }
}
