import React from "react";

import { Binary } from "./Binary";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("Binary", mod)
        .add("Basic", () => <Binary />);
};
