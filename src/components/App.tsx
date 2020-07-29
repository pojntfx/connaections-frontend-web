import * as React from "react";
import { LoginProvider } from "./LoginProvider";
import { DataProvider } from "./DataProvider";

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
        {({ connection }) => (
          <>
            {connection.getSource().getCountrycode()},
            {connection.getSource().getLatitude()},
            {connection.getSource().getLongitude()} {`=>`}{" "}
            {connection.getDst().getCountrycode()},
            {connection.getDst().getLatitude()},
            {connection.getDst().getLongitude()}
          </>
        )}
      </DataProvider>
    )}
  </LoginProvider>
);
