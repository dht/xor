// @flow
import React, { Component } from "react";
import "./Table.css";
import PropTypes from "prop-types";
import Column from "./Column";

type props = {};

export class Table<props> extends Component {
    static defaultProps: props = {};

    state = {};

    show = (current, column) => {
        this.props.show({ ...current, column });
    };

    render() {
        const { data } = this.props;

        return (
            <div className="Table-container">
                {data.map((col, index) => (
                    <Column
                        show={current => this.show(current, index)}
                        index={index}
                        key={index}
                        data={col}
                    />
                ))}
            </div>
        );
    }
}

Table.contextTypes = {
    i18n: PropTypes.object
};

export default Table;
