import React, {Component} from 'react'
import "./header.sass"
import {NavLink} from "react-router-dom";
import logo from './logo.png'

export default class Header extends Component {

    render() {
        return(
            <div className={"header"}>
                <NavLink to={"/"} className="logo"><img src={logo}/></NavLink>
                <div className="menu">
                    <NavLink to={"/all"} className="item">All</NavLink>
                    <NavLink to={"/animal"} className="item">Animals</NavLink>
                    <NavLink to={"/films"} className="item">Films</NavLink>
                    <NavLink to={"/food&drink"} className="item">Food&Drink</NavLink>
                    <NavLink to={"/nature"} className="item">Nature</NavLink>
                </div>
                <div className="search"></div>
            </div>
        )
    }
}