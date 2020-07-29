import * as React from "react";
import { Connection } from "../proto/generated/src/proto/connections_pb";

export interface IConnectionsListProps {
  connections: Connection[];
}

export const ConnectionsList: React.FC<IConnectionsListProps> = ({
  connections,
  ...otherProps
}) => (
  <table {...otherProps}>
    <thead>
      <tr>
        <th>Source</th>
        <th>Destination</th>
      </tr>
    </thead>

    <tbody>
      {connections.map((connection, index) => {
        const src = connection.getSource();
        const dst = connection.getDst();

        return (
          <tr key={index}>
            <td>
              {src.getCountrycode() +
                (src.getCityname() != "" ? " " + src.getCityname() : "")}
              ({src.getIp()}:{src.getPort()})
            </td>
            <td>
              {dst.getCountrycode() +
                (dst.getCityname() != "" ? " " + dst.getCityname() : "")}
              ({dst.getIp()}:{dst.getPort()})
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
