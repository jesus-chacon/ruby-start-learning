import React, { Component } from "react";

class countAvailables extends Component {
    render() {
        const count = this.props.count;
        let className = "text-danger";

        if (count < 4) {
            className = "text-danger";
        }

        if (count >= 4 && count < 7) {
            className = "text-warning";
        }

        if (count > 7) {
            className = "";
        }

        return (
            <span className={className}>
                {count}&nbsp; {this.props.children}
            </span>
        );
    }
}

export default countAvailables;