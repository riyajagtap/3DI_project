import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navigation} from './Navigation'
import Router from './Router'
import Homepage from './Pages/Homepage';
import Header from './header/header';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import axios from "axios";
function App() {
  return (
    <div>
    <Header></Header>  
    {/*<Homepage></Homepage>*/} 
    <Router></Router>
    </div>
  );
}

export default App;
