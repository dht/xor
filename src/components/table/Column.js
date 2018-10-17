// @flow
import React, { Component } from "react";
import "./Column.css";
import PropTypes from "prop-types";
import Binary from "../binary/Binary";

type props = {};

export class Column<props> extends Component {
    static defaultProps: props = {};

    state = {};

    renderCell(number) {
        const { isBit } = this.context;

        if (!isBit) {
            return number;
        }
        return <Binary number={number} />;
    }

    render() {
        const { data } = this.props;

        return (
            <div className="Column-container">
                <div className="header">{data.header}</div>
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
    isBit: PropTypes.object
};

export default Column;
