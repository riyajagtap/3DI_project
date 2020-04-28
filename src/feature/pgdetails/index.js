import React,{useState} from 'react'
import Pgdetailslist from './Pgdetailslist'
import './menu.css';
// import {connect} from 'react-redux'

function PgDetails(props){
    // const [value, total] = useState()
    return(
        <>
                {props.data.map(data=>(
                    <Pgdetailslist data={data}></Pgdetailslist>)
                    )}
        </>
    )
}
export default PgDetails