import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./src/components/App";

ReactDOM.render(
  <App endpoint={process.env.ENDPOINT} clientId={process.env.CLIENT_ID} />,
  document.getElementById("root")
);
