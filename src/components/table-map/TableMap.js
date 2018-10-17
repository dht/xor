// @flow
import React, { Component } from "react";
import "./TableMap.css";
import PropTypes from "prop-types";
import Table from "../table/Table";
import * as m from "../../utils/math";

type props = {};

export class TableMap<props> extends Component {
    static defaultProps: props = {};

    constructor(props) {
        super();

        this.state = {
            data: m.generateMap(props.method)
        };
    }

    show = current => {
        const { method } = this.props;
        this.props.show({ ...current, method });
    };

    render() {
        const { method } = this.props;
        const { data } = this.state;

        return (
            <div className="TableMap-container">
                <div>{method}</div>
                <Table show={this.show} data={data} />
            </div>
        );
    }
}

TableMap.contextTypes = {
    i18n: PropTypes.object
};

export default TableMap;
