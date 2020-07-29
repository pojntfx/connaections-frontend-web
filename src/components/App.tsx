import * as React from "react";
import { LoginProvider } from "./LoginProvider";

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
    {({ token }) => <div>{token}</div>}
  </LoginProvider>
);
