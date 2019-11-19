import React, {Component} from 'react'
import "./header.sass"
import {BrowserRouter as Router, NavLink} from "react-router-dom";

export default class Header extends Component {

    render() {
        return(
            <div className={"header"}>
                <NavLink to={"/"} className="item">All</NavLink>
                <NavLink to={"/animal"} className="item">Animals</NavLink>
                <NavLink to={"/film"} className="item">Films</NavLink>
                <NavLink to={"/food&drink"} className="item">Food&Drink</NavLink>
                <NavLink to={"/nature"} className="item">Nature</NavLink>
            </div>
        )
    }
}