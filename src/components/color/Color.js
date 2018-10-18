// @flow
import React, { Component } from "react";
import "./Color.css";
import PropTypes from "prop-types";

type props = {};

export class Color<props> extends Component {
    static defaultProps: props = {};

    state = {};

    style = () => {
        const { number } = this.props;

        const opacity = number / 15;

        return {
            opacity
        };
    };

    render() {
        return <div className="Color-container" style={this.style()} />;
    }
}

Color.contextTypes = {
    i18n: PropTypes.object
};

export default Color;
