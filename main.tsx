import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./src/components/App";

ReactDOM.render(
  <App
    initialEndpoint={process.env.INITIAL_ENDPOINT}
    initialClientId={process.env.INITIAL_CLIENT_ID}
  />,
  document.getElementById("root")
);
