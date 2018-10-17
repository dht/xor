// @flow
import React, { Component } from "react";
import "./Preview.css";
import PropTypes from "prop-types";
import Binary from "../binary/Binary";

type props = {};

export class Preview<props> extends Component {
    static defaultProps: props = {};

    state = {};

    render() {
        const { data } = this.props;
        const { value, row, column, method } = data;

        return (
            <div className="Preview-container">
                <div className="header">{method}</div>
                <div className="dec">
                    <span>{row}</span>
                    <span>{column}</span>
                    <span>{value}</span>
                </div>
                <div className="binaries">
                    <Binary number={row} />
                    <Binary number={column} />
                    <Binary number={value} />
                </div>
            </div>
        );
    }
}

Preview.contextTypes = {
    i18n: PropTypes.object
};

export default Preview;
