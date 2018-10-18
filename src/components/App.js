import React, { Component } from "react";
import "./App.css";
import TableMap from "./table-map/TableMap";
import Preview from "./preview/Preview";
import * as m from "../utils/math";
import PropTypes from "prop-types";

class App extends Component {
    getChildContext = () => {
        return {
            isBit: false,
            isColorful: true,
            colorfulHeaders: true
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
                <div>
                    <TableMap method={"and"} show={this.show} />
                    <TableMap method={"or"} show={this.show} />
                </div>
                <div>
                    <TableMap method={"if"} show={this.show} />
                    <TableMap method={"ifonly"} show={this.show} />
                </div>
                <div>
                    <TableMap method={"xor"} show={this.show} />
                    <TableMap method={"nand"} show={this.show} />
                </div>
                <div>
                    <TableMap method={"nor"} show={this.show} />
                    <TableMap method={"eight"} show={this.show} />
                </div>
                <Preview data={current} />
            </div>
        );
    }
}

App.childContextTypes = {
    isBit: PropTypes.boolean,
    isColorful: PropTypes.boolean,
    colorfulHeaders: PropTypes.boolean
};

export default App;
