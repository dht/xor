import React from "react";

import { Preview } from "./Preview";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("Preview", mod)
        .add("Basic", () => <Preview />);
};
