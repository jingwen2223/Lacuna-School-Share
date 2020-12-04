import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import ShoppingPage from "./components/Shopping/ShoppingPage";
import Checkout from "./components/Checkout/Checkout";
import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "./components/landingpage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/LandingPage" />
        </Route>
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/ShoppingPage" component={ShoppingPage} />
        <Route exact path="/Checkout" component={Checkout} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/LandingPage" component={LandingPage} />
        {/* <Route exact path="/About" component={About} /> */}
      </Switch>
    </div>
  );
};

export default Routes;
