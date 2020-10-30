import React from "react";
import styles from "./navbar.module.css";
import App from "../../App";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Contact from "../footer/contact";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav id={styles.navbar}>
              <h1>
                <span className={styles.primaryText}>School</span>Supplies
              </h1>
              <ul>
                <li className={styles.darkBg}>
                  <Link to="/">Home</Link>
                </li>
                <li className={styles.darkBg}>
                  <Link to="/sign-in">Sign-in</Link>
                </li>
                <li className={styles.darkBg}>
                  <Link to="/buy">Buy</Link>
                </li>
                <li className={styles.darkBg}>
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/" component={App} />
            </Switch>
          </div>
        </Router>
        <Contact></Contact>
      </div>
    );
  }
}

export default Navbar;
