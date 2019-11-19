import React, {Component} from 'react';
import "./app.sass"
import GalleryList from "../gallery-list/gallery-list";
import Slider from "../slider/slider";
import Header from "../header/header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "../pages/home-page/home-page";

class App extends Component {

    state = {
        error: false,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render(){
        const { error } = this.state;

        if(error) return <div className={"error"}>Something went wrong.... :(</div>;

        return (
            <div className="app">
                <Router>
                    <Header/>
                    <Switch>
                        <Route
                            path={"/"}
                            render={ () => {
                                return <HomePage/>
                            }}
                            exact
                        />
                        <Route
                            path={"/animal"}
                            render={ () => {
                                return <GalleryList id={3330452} />
                            }}
                            exact
                        />
                        <Route
                            render={ () => {
                                return <h2>Page Not Found</h2>
                            }}
                            exact
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
