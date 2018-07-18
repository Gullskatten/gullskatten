import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import NoMatch from "./NoMatch";
import Home from "./Home";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Subscribe } from "unstated";
import ThemeContainer from "../containers/ThemeContainer";
import Navbar from "./Navbar";

export const history = createHistory();

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    to top,
    ${props => props.theme.backgroundTop} 0%,
    ${props => props.theme.backgroundBottom} 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
`;

class App extends Component {
    render() {
      return (
        <Subscribe to={[ThemeContainer]}>
          { ({state}) => {
            return <ThemeProvider theme={state.selectedTheme}>
              <Router history={history}>
                <AppContainer>
                    <Navbar/>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NoMatch} />
                  </Switch>
                </AppContainer>
              </Router>
            </ThemeProvider>;
          }}
        </Subscribe>
      );
    }
  }

export default App;
