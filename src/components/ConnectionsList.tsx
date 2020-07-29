import * as React from "react";
import { Connection } from "../proto/generated/src/proto/connections_pb";
import styled from "styled-components";

export interface IConnectionsListProps {
  connections: [Connection, string][];
}

export const ConnectionsList: React.FC<IConnectionsListProps> = ({
  connections,
  ...otherProps
}) => (
  <Table {...otherProps}>
    <thead>
      <tr>
        <th>Source</th>
        <th>Destination</th>
      </tr>
    </thead>

    <tbody>
      {connections.map((connection, index) => {
        const src = connection[0].getSource();
        const dst = connection[0].getDst();

        return (
          <TableRow color={connection[1]} key={index}>
            <TableData>
              {src.getCountrycode() +
                (src.getCityname() != "" ? " " + src.getCityname() : "")}
              ({src.getIp()}:{src.getPort()})
            </TableData>
            <TableData>
              {dst.getCountrycode() +
                (dst.getCityname() != "" ? " " + dst.getCityname() : "")}
              ({dst.getIp()}:{dst.getPort()})
            </TableData>
          </TableRow>
        );
      })}
    </tbody>
  </Table>
);

const Table = styled.table`
  display: block;
  overflow-x: auto;
  border-collapse: separate;
  border-spacing: 0 1rem;
`;

const TableRow = styled.tr<{ color: string }>`
  background: ${(props) => props.color};
  color: ${(props) =>
    parseInt(props.color.replace("#", ""), 16) > 0xffffff / 2
      ? "#000"
      : "#fff"};
`;

const TableData = styled.td`
  padding: 0.5rem;
`;
