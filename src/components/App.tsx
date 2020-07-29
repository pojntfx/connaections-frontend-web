import * as React from "react";
import { LoginProvider } from "./LoginProvider";
import { DataProvider } from "./DataProvider";
import { ConnectionsMap } from "./ConnectionsMap";
import { ConnectionsList } from "./ConnectionsList";
import styled, { createGlobalStyle } from "styled-components";

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
            <GlobalStyle />

            <Header>
              <h1>Connaections</h1>
              <button onClick={clearConnections}>Clear connections</button>
            </Header>

            <Main>
              <article>
                <section id="map">
                  <h2>Connection Map</h2>
                  <ConnectionsMap
                    connections={connections}
                    geoUrl="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
                  />
                </section>
              </article>

              <Aside>
                <section id="count">
                  <h2>Connection Count</h2>
                  <span>{connections.length} individual connections</span>
                </section>

                <section id="list">
                  <h2>Connection List</h2>
                  <ConnectionsList connections={connections} />
                </section>
              </Aside>
            </Main>
          </>
        )}
      </DataProvider>
    )}
  </LoginProvider>
);

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const Aside = styled.aside`
  min-width: 0;
`;
