import React, { Component } from "react";
import { Provider } from "react-redux";
import Items from "./components/Items";
import Bag from "./components/Bag";
import store from "./store";
import Links from "./components/Links";
import Sort_Items from "./components/Sort_Items";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="alert alert-info" >
          School Supplies
          <hr />
          <div className="container">
            <div className="col-md-14">
            <Bag />
              <hr />
              <Sort_Items />
              <hr />
              <Items />
            </div>
            <hr />
            <div className="col-md-4">
              <Links />
            </div>
          </div>
        </div>
      </Provider>
      
    );
  }
}

export default App;
