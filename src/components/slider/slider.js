import React, {Component} from 'react'
import "./slider.sass"
import slider from "./slider.jpg";

export default class Slider extends Component {
    render() {
        return(
            <div className="slider" style={{"backgroundImage": `url(${slider})`}}></div>
        )
    }
}