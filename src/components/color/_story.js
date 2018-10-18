import React from "react";

import { Color } from "./Color";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("Color", mod)
        .add("Basic", () => <Color />);
};
