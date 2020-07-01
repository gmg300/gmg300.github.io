import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Wrapper>
            <Route exact path={["/", "/profile"]}>
              <Profile />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/connect">
              <Connect />
            </Route> 
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
