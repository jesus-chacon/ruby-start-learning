import React, { Component } from "react";

class ShortText extends Component {
    render() {
        let text = this.props.text;
        let limit = this.props.limit;

        if (text.length > limit) {
            text = text.substr(0, limit) + "...";
        }

        return (<span>{text}</span>);
    }
}

export default ShortText;