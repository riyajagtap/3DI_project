import React, { Component } from 'react'

export default class Roomdetaillist extends Component {
    render() {
        return (
            <>
                <div class="dropdown">
                    <button class="dropbtn">Room A</button>
                    <div class="dropdown-content">
                        <a href="#">Bed 1</a>
                        <a href="#">Bed 2</a>
                        <a href="#">Bed 3</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Room B</button>
                    <div class="dropdown-content">
                        <a href="#">Bed 11</a>
                        <a href="#">Bed 22</a>
                        <a href="#">Bed 33</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Room C</button>
                    <div class="dropdown-content">
                        <a href="#">Bed 12</a>
                        <a href="#">Bed 23</a>
                        <a href="#">Bed 34</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Room D</button>
                    <div class="dropdown-content">
                        <a href="#">Bed 11</a>
                        <a href="#">Bed 22</a>
                        <a href="#">Bed 33</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Room E</button>
                    <div class="dropdown-content">
                        <a href="#">Bed 12</a>
                        <a href="#">Bed 23</a>
                        <a href="#">Bed 34</a>
                    </div>
                </div>
            </>
        )
    }
}
