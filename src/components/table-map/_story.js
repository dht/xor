import React from "react";

import { TableMap } from "./TableMap";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("TableMap", mod)
        .add("Basic", () => <TableMap />);
};
