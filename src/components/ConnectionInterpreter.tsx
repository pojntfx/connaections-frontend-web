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

export interface IConnectionInterpreterProps {
  connection: Connection;
  geoUrl: string;
}

export const ConnectionInterpreter: React.FC<IConnectionInterpreterProps> = ({
  connection,
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
      <Line
        from={[
          connection.getSource().getLongitude(),
          connection.getSource().getLatitude(),
        ]}
        to={[
          connection.getDst().getLongitude(),
          connection.getDst().getLatitude(),
        ]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </ZoomableGroup>
  </ComposableMap>
);
