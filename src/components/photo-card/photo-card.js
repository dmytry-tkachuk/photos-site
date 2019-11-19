import React, {Component} from 'react'
import "./photo-card.sass"
import GalleryService from "../../servise";
import Loader from "../loader/loader";

const service = new GalleryService();

export default class PhotoCard extends Component {

    state = {
        photo: false
    };

    componentDidMount() {
        service.getOnePhoto(this.props.id)
            .then(photo => this.setState({photo}))
    }

    render() {
        const { photo } = this.state;
        const { history } = this.props;

        if(!photo) return <Loader/>;

        return(
            <div className={"photo-card-section"}>
                <div
                    onClick={() => history.goBack()}
                    className="backTo">back to prev page</div>
                <div className="slider" style={{"backgroundImage": `url(${photo.urls.regular})`}}></div>
            </div>
        )
    }
}