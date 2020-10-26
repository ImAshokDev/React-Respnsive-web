import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
