import * as React from "react";
import GoogleLogin from "react-google-login";

export interface ILoginProviderProps {
  clientId: string;
  children: (props: ILoginProviderDataProps) => React.ReactElement;
}

export interface ILoginProviderDataProps {
  token: string;
}

export const LoginProvider: React.FC<ILoginProviderProps> = ({
  clientId,
  children,
  ...otherProps
}) => {
  const [token, setToken] = React.useState("");

  return token ? (
    children({ token, ...otherProps })
  ) : (
    <GoogleLogin
      onSuccess={(res) => setToken((res as any).tokenId)}
      onFailure={(e) => console.error(e)}
      clientId={clientId}
      isSignedIn
      {...otherProps}
    />
  );
};
