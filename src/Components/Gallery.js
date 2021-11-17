import React, { Component } from 'react';
import "./Gallery.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class Gallery extends Component {
    render () {
    return (
            <div className="main-gallery">
                <div className="container">
                    <div className="row first-row">
                        <div className="col-4 col">
                            <div className="image-box">
                                <img src={this.props.img[0]} alt='g1'/>
                            </div>
                        </div>
                        <div className="col-4 col">
                            <div className="image-box">
                                <img src={this.props.img[1]} alt='g1'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;