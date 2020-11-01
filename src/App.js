import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components";
import Navbar from "./components/Navbar/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";

import GlobalStyle from "./globalStyles";

import { Home } from "./pages/HomePage/Home";
import { Product } from "./pages/Product/Product";
import { Services } from "./pages/Services/Services";
import { SignUp } from "./pages/SignUp/SignUp";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
