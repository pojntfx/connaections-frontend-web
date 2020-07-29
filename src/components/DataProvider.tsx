import * as React from "react";
import { Connection } from "../proto/generated/src/proto/connections_pb";
import { BrowserHeaders } from "browser-headers";
import { ConnectionsClient } from "../proto/generated/src/proto/connections_pb_service";

export interface IDataProviderProps {
  token: string;
  endpoint: string;
  children: (props: IDataProviderDataProps) => React.ReactElement;
}

export interface IDataProviderDataProps {
  connection: Connection;
}

export const DataProvider: React.FC<IDataProviderProps> = ({
  token,
  endpoint,
  children,
  ...otherProps
}) => {
  const [connection, setConnection] = React.useState<Connection>();

  React.useEffect(() => {
    const headers = new BrowserHeaders({
      Authorization: `Bearer ${token}`,
    });

    const client = new ConnectionsClient(endpoint);

    const stream = client.subscribe(new Connection(), headers);

    stream.on("data", (newConnection) => {
      if (
        newConnection.getSource().getCountrycode() == "" ||
        newConnection.getDst().getCountrycode() == "" ||
        (newConnection.getSource().getLongitude() ==
          newConnection.getDst().getLongitude() &&
          newConnection.getSource().getLatitude() ==
            newConnection.getDst().getLatitude())
      ) {
        return;
      }

      setConnection(newConnection);
    });
  }, []);

  return connection ? children({ connection, ...otherProps }) : null;
};
