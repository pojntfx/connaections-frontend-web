import * as React from "react";
import { LoginProvider } from "./LoginProvider";
import { DataProvider } from "./DataProvider";
import { ConnectionInterpreter } from "./ConnectionInterpreter";

export interface IAppProps {
  clientId: string;
  endpoint: string;
}

export const App: React.FC<IAppProps> = ({
  clientId,
  endpoint,
  ...otherProps
}) => (
  <LoginProvider clientId={clientId} {...otherProps}>
    {({ token }) => (
      <DataProvider endpoint={endpoint} token={token}>
        {({ connections }) => {
          console.log(connections.length);

          return (
            <ConnectionInterpreter
              connections={connections}
              geoUrl="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
            />
          );
        }}
      </DataProvider>
    )}
  </LoginProvider>
);
