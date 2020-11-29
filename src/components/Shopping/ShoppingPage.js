import React from "react";
import { Provider } from "react-redux";
import Items from "./Items";
import Bag from "./Bag";
import store from "../../store";
import Links from "./Links";
import SortItems from "./SortItems";

export default function ShoppingPage() {
      return (
        <Provider store={store}>
          <div className="alert alert-info" >
            School Supplies
            <hr />
            <div className="container">
              <div className="col-md-14">
              <Bag />
                <hr />
                <SortItems />
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