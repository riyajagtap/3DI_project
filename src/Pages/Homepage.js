import React, {Component} from 'react'
import ReactDom from 'react-dom'
import './Home.css'
import Header from '../header/header'
import {NavLink} from 'react-router-dom'
import '../App.css'
import Citynames from '../data/city.json'
import Cityareas from '../data/cityarea.json'
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import logo from './im2.png';

export default class Homepage extends Component {

  

  constructor(props) {
    super(props)
  
    this.state = {
       cityname:"Pune",
       cityarea:'Magarpatta',
       noofguest:90,
       startdate:"",
       enddate:""
    }
  }
  
  citynameHandler=(e)=>{
    this.setState({
      cityname:e.target.value
    })
  }
  cityareaHandler=(e)=>{
      this.setState({
        cityarea:e.target.value
      })
  }
  noofguestHandler=(e)=>{
    this.setState({
      noofguest:e.target.value

    })
  }
  clickHandler = (e) =>{
        e.preventDefault();
    alert(`${this.state.cityname} ${this.state.cityarea} ${this.state.noofguest} ${this.state.startdate} ${this.state.enddate}`)
  }

 
  render() {
    
    const myvar = this.state.cityname;
    return (
      <>
      
        <div className="header-banner">
        <div className="container-width">
        <div className="clearfix">
        </div>
        <div className="lead-title">A Complete Solution
        </div>
    
        <form className="form">
          <label className="label">City</label>
          <select name="City" required className="select" value={this.cityname} onChange={this.citynameHandler}><option value="">- Select option -</option>
            {
              Citynames.city.map((city,id)=>
            (<option key={id} value={city}>{city}</option>))
            }
          </select>
          <div className="form-group">
          <label className="label" >Area</label>
          <select name="Cityarea" required className="select" value={this.cityarea} onChange={this.cityareaHandler}><option value="">- Select option -</option>
            {
              Cityareas[myvar].map((cityarea,id)=>
              (<option key={id} value={cityarea}>{cityarea}</option>))
            }
          </select>
          </div>
          <div className="form-group">
          <label htmlFor="startdate"className="label">Start Date</label>
          <input type="date" onChange={e => this.setState({startdate: e.target.value })}className="input"/>
          </div>
          <React.Fragment>       
          <div className="form-group">
         
          <label htmlFor="startdate"className="label">End Date</label>
          <input type="date" min={format(this.state.startdate, "YYYY-MM-DD")} onChange={e => this.setState({ enddate: e.target.value })} className="input"/>
          
          </div>
           </React.Fragment>
        
          <div className="form-group">
          <label className="label">No. of Guest</label>
          <input type="number" min="1" value={this.noofguest} onChange={this.noofguestHandler} placeholder="Number Of Guest" required type="number" className="input"/>
          </div>
          <div id="Go" title="Submit" className="form-group">
          <button type="submit" className="button" onClick={this.clickHandler}>Go</button>
          </div>
          </form>
        </div>
      </div>
         {/* <div className="header-banner"> 
          <div className="conatainer-width">
            <div className="form">
            <label className="label">
              <NavLink to='/loginStudent'></NavLink>Click to Proceed
            </label>
            
            <NavLink to='/loginStudent'>
            <button className="button">Student
            </button></NavLink>
            <NavLink to='/loginadmin'>
            <button className="button">Manager/Admin</button>
            </NavLink>
          </div>
          </div> */}
        {/* </div> */}
      </>
    )
  }
}
