import * as React from "react";
import { LoginProvider } from "./LoginProvider";
import { DataProvider } from "./DataProvider";

export interface IAppProps {
  initialClientId: string;
  initialEndpoint: string;
}

export const App: React.FC<IAppProps> = ({
  initialClientId,
  initialEndpoint,
  ...otherProps
}) => (
  <LoginProvider initialClientId={initialClientId} {...otherProps}>
    {({ token }) => (
      <DataProvider initialEndpoint={initialEndpoint} token={token}>
        {({ connections }) => (
          <ul>
            {connections.map((connection, index) => (
              <li key={index}>
                {connection.getSrccountry()} ({connection.getSrcip()}:
                {connection.getSrcport()}) {`=>`} {connection.getDstcountry()} (
                {connection.getDstip()}:{connection.getDstport()})
              </li>
            ))}
          </ul>
        )}
      </DataProvider>
    )}
  </LoginProvider>
);
