import React from "react";
import styles from "./navbar.module.css";
import App from "../../App";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Contact from "../footer/contact";
import Routes from "../../Routes";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav id={styles.navbar}>
              <h1>
                Lacuna<span className={styles.primaryText}> School </span>
                Supplies
              </h1>
              <ul>
                <li className={styles.darkBg}>
                  <Link to="/">Home</Link>
                </li>
                <li className={styles.darkBg}>
                  <Link to="/SignIn">Sign-In</Link>
                </li>
                <li className={styles.darkBg}>
                  <Link to="/ShoppingPage">Shopping Page</Link>
                </li>
                <li className={styles.darkBg}>
                  <Link to="/Checkout">Checkout</Link>
                </li>
                {/* <li className={styles.darkBg}>
                  <Link to="/Dashboard">Dashboard</Link>
                </li> */}
              </ul>
            </nav>

            <Switch>
              <Routes />
            </Switch>
          </div>
        </Router>
        <Contact></Contact>
      </div>
    );
  }
}

export default Navbar;
