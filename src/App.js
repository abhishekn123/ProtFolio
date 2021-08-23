import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
import Navbar from './navbar';
import { Container } from "@chakra-ui/react"
import AboutPage from './page/About';
import { Switch, } from "react-router-dom";
import ProjectPage from "./page/Project";
import OpenSourcePage from "./page/OpenSource";
import ArticlePage from "./page/Article";
import history from './Router/history';
import { Route, Router } from "react-router";


function App() {
  const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  }
  const theme = extendTheme({ config })
 
  return (
    <ChakraProvider theme={theme} >
      <div className="head" style={{ marginBottom: 50 }} />
      <Container maxW="container.md"   >
        <Router history={history} >
        <Navbar />
          <Switch>
            <Route exact path="/" component={AboutPage} />
            <Route exact path="/Projects" component={ProjectPage} />
            <Route exact path="/OpenSource" component={OpenSourcePage} />
            <Route exact path="/Articles" component={ArticlePage} />
          </Switch>
        </Router>
      </Container>
    </ChakraProvider>
  );
}

export default App;
