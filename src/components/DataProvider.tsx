import * as React from "react";
import { Connection } from "../proto/generated/src/proto/connections_pb";
import { BrowserHeaders } from "browser-headers";
import { ConnectionsClient } from "../proto/generated/src/proto/connections_pb_service";
import _ from "lodash";

export interface IDataProviderProps {
  token: string;
  endpoint: string;
  children: (props: IDataProviderDataProps) => React.ReactElement;
}

export interface IDataProviderDataProps {
  connections: Connection[];
}

export const DataProvider: React.FC<IDataProviderProps> = ({
  token,
  endpoint,
  children,
  ...otherProps
}) => {
  const [connections, setConnections] = React.useState<Connection[]>([]);

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

      setConnections((oldConnections) =>
        _.uniqWith(
          [...oldConnections, newConnection],
          (a, b) =>
            a.getSource().getLongitude() == b.getSource().getLongitude() &&
            a.getSource().getLatitude() == b.getSource().getLatitude() &&
            a.getDst().getLongitude() == b.getDst().getLongitude() &&
            a.getDst().getLatitude() == b.getDst().getLatitude()
        )
      );
    });
  }, []);

  return connections ? children({ connections, ...otherProps }) : null;
};
