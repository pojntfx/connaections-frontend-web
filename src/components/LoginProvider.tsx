import * as React from "react";
import GoogleLogin from "react-google-login";

export interface ILoginProviderProps {
  initialClientId: string;
  children: (props: ILoginProviderDataProps) => React.ReactElement;
}

export interface ILoginProviderDataProps {
  token: string;
}

export const LoginProvider: React.FC<ILoginProviderProps> = ({
  initialClientId,
  children,
  ...otherProps
}) => {
  const [clientId, setClientId] = React.useState(initialClientId);
  const [token, setToken] = React.useState("");

  return token ? (
    children({ token, ...otherProps })
  ) : (
    <div {...otherProps}>
      <input
        placeholder="Client ID"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
      />
      <GoogleLogin
        onSuccess={(res) => setToken((res as any).tokenId)}
        onFailure={(e) => console.error(e)}
        clientId={clientId}
        isSignedIn
      />
    </div>
  );
};
