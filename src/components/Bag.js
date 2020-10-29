import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart, removeFromCart } from "../actions/shopping_cart";

class Bag extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="container">
        {cartItems.length === 0 ? (
          "Your Bag is Empty"
        ) : (
          <div>
             {cartItems.length} Items in your Bag <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: -125 }}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button style={{ float: "right" }}
                         className="btn btn-warning"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    } >
                    X
                  </button>
                  <br />
                  {item.count} X {util.formatCurrency(item.price)}
                </li>
              ))}
            </ul>

            <b>
              Total:{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </b>
            <button
              onClick={() => alert(" Your Order is Received")}
              className="btn btn btn-success btn-lg"
            >
              Checkout 
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Bag);
