import React, { Component } from "react";
import { PacmanLoader } from "react-spinners";

class Loading extends Component {
    render() {
        return (
            <div className="row justify-content-md-center loading">
                <div className="col-xs">
                    <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                </div>
            </div>
        );
    }
}

export default Loading;