import React, { Component } from "react";
import "./App.css";
import TableMap from "./table-map/TableMap";
import Preview from "./preview/Preview";
import * as m from "../utils/math";
import PropTypes from "prop-types";

class App extends Component {
    getChildContext = () => {
        return {
            isBit: false
        };
    };

    state = {
        current: {}
    };

    show = current => {
        this.setState({ current });
    };

    render() {
        const { current } = this.state;

        return (
            <div className="App">
                <TableMap method={"and"} show={this.show} />
                <TableMap method={"or"} show={this.show} />
                <TableMap method={"if"} show={this.show} />
                <TableMap method={"ifonly"} show={this.show} />
                <Preview data={current} />
            </div>
        );
    }
}

App.childContextTypes = {
    isBit: PropTypes.boolean
};

export default App;
