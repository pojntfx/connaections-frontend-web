import * as React from "react";
import { Connection } from "../proto/generated/src/proto/connections_pb";
import { BrowserHeaders } from "browser-headers";
import { ConnectionsClient } from "../proto/generated/src/proto/connections_pb_service";
import { v4 } from "uuid";

export interface IDataProviderProps {
  token: string;
  initialEndpoint: string;
  children: (props: IDataProviderDataProps) => React.ReactElement;
}

export interface IDataProviderDataProps {
  connections: Connection[];
}

export interface IIdentifiableConnection extends Connection {
  id: string;
}

export const DataProvider: React.FC<IDataProviderProps> = ({
  token,
  initialEndpoint,
  children,
  ...otherProps
}) => {
  const [connections, setConnections] = React.useState<
    IIdentifiableConnection[]
  >([]);
  const [endpoint, setEndpoint] = React.useState(initialEndpoint);

  React.useEffect(() => {
    const headers = new BrowserHeaders({
      Authorization: `Bearer ${token}`,
    });

    const client = new ConnectionsClient(endpoint);

    const stream = client.subscribe(new Connection(), headers);

    stream.on("data", async (msg: IIdentifiableConnection) => {
      if (msg.getDstcountry() == "ZZ") {
        return;
      }

      msg.id = v4();

      setConnections((oldConnections) => [...oldConnections, msg]);
      setTimeout(() => {
        console.log("Deleting", msg.id);
        setConnections((oldConnections) =>
          oldConnections.filter((connection) => connection.id != msg.id)
        );
      }, 1000);
    });
  }, [endpoint]);

  return connections.length != 0 ? (
    children({ connections, ...otherProps })
  ) : (
    <div {...otherProps}>
      <input
        placeholder="Endpoint"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
      />
    </div>
  );
};
