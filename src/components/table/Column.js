// @flow
import React, { Component } from "react";
import "./Column.css";
import PropTypes from "prop-types";
import Binary from "../binary/Binary";
import Color from "../color/Color";

type props = {};

export class Column<props> extends Component {
    static defaultProps: props = {};

    state = {};

    renderCell(number, isHeader) {
        const { isBit, isColorful, colorfulHeaders } = this.context;
        const { index } = this.props;

        if (isHeader && !colorfulHeaders) return number;

        if (isBit) {
            return <Binary number={number} />;
        }

        if (isColorful) {
            if (index === 0 && !colorfulHeaders) return number;

            return <Color number={number} />;
        }

        return number;
    }

    render() {
        const { data } = this.props;

        return (
            <div className="Column-container">
                <div className="header">
                    {this.renderCell(data.header, true)}
                </div>
                {data.rows.map((row, index) => (
                    <div
                        onMouseOver={() =>
                            this.props.show({ value: row, row: index + 1 })
                        }
                        key={index}
                    >
                        {this.renderCell(row)}
                    </div>
                ))}
            </div>
        );
    }
}

Column.contextTypes = {
    isBit: PropTypes.boolean,
    isColorful: PropTypes.boolean,
    colorfulHeaders: PropTypes.boolean
};

export default Column;
