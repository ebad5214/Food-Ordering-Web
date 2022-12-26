import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../NavBar/NavApp.css'
import Nav from "./Nav/Nav";
import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
import Location from "./Pages/Location";
import ContactUs from "./Pages/ContactUs";
import Cart from "./Pages/Cart";

const NavApp = () => {
  return (
    <div className="containerW">
      <Router>
        <Nav />
        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path={"/reservation"} component={Reservation} />
          <Route path={"/location"} component={Location} />
          <Route path={"/contact"} component={ContactUs} />
          <Route path={"/cart"} component={Cart} />
        </Switch>
      </Router>
    </div>
  );
};

export default NavApp;
