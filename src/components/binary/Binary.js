// @flow
import React, { Component } from "react";
import "./Binary.css";
import PropTypes from "prop-types";
import classnames from "classnames";
import * as m from "../../utils/math";

type props = {};

export class Binary<props> extends Component {
    static defaultProps: props = {};

    state = {};

    renderBit(b) {
        const className = classnames("bit", { empty: !b });

        return <div className={className} />;
    }

    render() {
        const { number } = this.props;

        const arr = m.dec2bit(parseInt(number, 10));

        return (
            <div className="Binary-container">
                {arr.map(b => this.renderBit(b))}
            </div>
        );
    }
}

Binary.contextTypes = {
    isBit: PropTypes.object,
    isColorful: PropTypes.boolean
};

export default Binary;
