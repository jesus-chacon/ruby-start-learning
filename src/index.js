import React from "react";
import ReactDOM from "react-dom";

import Config from "./config";

localStorage.clear();

ReactDOM.render(
    <Config />,
    document.getElementById("root")
);