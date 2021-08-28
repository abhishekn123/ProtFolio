import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./navbar";
import { Container } from "@chakra-ui/react";
import AboutPage from "./page/About";
import { Switch } from "react-router-dom";
import ProjectPage from "./page/Project";
import OpenSourcePage from "./page/OpenSource";
import ArticlePage from "./page/Article";
import history from "./Router/history";
import { Route, Router } from "react-router";
import Footer from "./Footer";
import { ProfileViewed } from "./service/firebaseService";
import { useEffect } from "react";

function App() {
  const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };
  const theme = extendTheme({ config });
  useEffect(() => {
    ProfileViewed();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <div className="head" style={{ marginBottom: 50 }} />
      <Container maxW="container.md">
        <Router history={history}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={AboutPage} />
            <Route exact path="/Projects" component={ProjectPage} />
            <Route exact path="/OpenSource" component={OpenSourcePage} />
            <Route exact path="/Articles" component={ArticlePage} />
          </Switch>
          <Footer />
        </Router>
      </Container>
    </ChakraProvider>
  );
}

export default App;
