import React, {Component} from 'react'
import './menu.css'
import imj from './logo1.jpg'
import RoomDetails from '../roomdetails/index'

export default class Pgdetailslist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showPopup:false,
        }
    }
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
    
    render() {
        return (
        <>
        <div className="list-container">
        <div className="place booked">
        <img src={imj}></img>
            <h3>{this.props.data.name}</h3>
            <div className="beds"><i class="fas fa-bed"></i>3 Beds Sharing</div>
            <div className="address">{this.props.data.address}</div>
            <div className="address">  {this.props.data.city}  {this.props.data.state}  {this.props.data.pincode}</div>
            <div className="price-label">
                Min Price
                <div className="price-lebel price"><i class="fas fa-rupee-sign"></i>{this.props.data.rent_min}</div>
            </div>
            {/* to disply no of bed-------------- */}
            <div class="dialogbox">
                <span class="tip tip-down"></span>
                    <div class="message">
                        <span> 3 bed left</span>
                    </div>
            </div>
            {/* end of display------------------- */}
            <section >
                <div>
                <div><i class="fas fa-wifi"></i>Wifi Available</div>
                <div><i class="fas fa-couch"></i>Furnished</div>
                <div><i class="fas fa-utensils"></i>Meals Available</div>
            </div>
            {/* <i class="fas fa-dumbbell"></i>
            <i class="fas fa-swimming-pool"></i> */}
            <button onClick={this.togglePopup.bind(this)} >More Details</button>
            </section>
        </div></div>
        {this.state.showPopup ? 
          <RoomDetails
            text='Close'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </>
        )
    }
}