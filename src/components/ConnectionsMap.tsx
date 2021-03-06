import * as React from "react";
import { Connection } from "../proto/generated/src/proto/connections_pb";
import {
  ComposableMap,
  Graticule,
  Geographies,
  Geography,
  Line,
  ZoomableGroup,
} from "react-simple-maps";

export interface IConnectionsMapProps {
  connections: [Connection, string][];
  geoUrl: string;
}

export const ConnectionsMap: React.FC<IConnectionsMapProps> = ({
  connections,
  geoUrl,
  ...otherProps
}) => (
  <ComposableMap
    projection="geoEqualEarth"
    projectionConfig={{
      scale: 140,
      center: [0, 0],
    }}
    {...otherProps}
  >
    <ZoomableGroup zoom={1}>
      <Graticule stroke="#DDD" />
      <Geographies
        geography={geoUrl}
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {connections.map((connection, index) => (
        <Line
          from={[
            connection[0].getSource().getLongitude(),
            connection[0].getSource().getLatitude(),
          ]}
          to={[
            connection[0].getDst().getLongitude(),
            connection[0].getDst().getLatitude(),
          ]}
          stroke={connection[1]}
          strokeWidth={2}
          strokeLinecap="round"
          key={index}
        />
      ))}
    </ZoomableGroup>
  </ComposableMap>
);
