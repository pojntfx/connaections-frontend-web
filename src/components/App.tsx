import * as React from "react";
import { LoginProvider } from "./LoginProvider";
import { DataProvider } from "./DataProvider";
import { ConnectionsMap } from "./ConnectionsMap";
import { ConnectionsList } from "./ConnectionsList";

export interface IAppProps {
  clientId: string;
  endpoint: string;
}

export const App: React.FC<IAppProps> = ({
  clientId,
  endpoint,
  ...otherProps
}) => (
  <LoginProvider clientId={clientId} {...otherProps}>
    {({ token }) => (
      <DataProvider endpoint={endpoint} token={token}>
        {({ connections, clearConnections }) => (
          <>
            <header>
              <h1>Connaections</h1>
              <button onClick={clearConnections}>Clear connections</button>
            </header>

            <main>
              <article>
                <section id="map">
                  <h2>Connection Map</h2>
                  <ConnectionsMap
                    connections={connections}
                    geoUrl="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
                  />
                </section>
              </article>

              <aside>
                <section id="count">
                  <h2>Connection Count</h2>
                  <span>{connections.length} individual connections</span>
                </section>

                <section id="list">
                  <h2>Connection List</h2>
                  <ConnectionsList connections={connections} />
                </section>
              </aside>
            </main>
          </>
        )}
      </DataProvider>
    )}
  </LoginProvider>
);
