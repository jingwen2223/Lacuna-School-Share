import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart, fetchProducts } from "../actions/shopping_cart";

class Items extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (

      <div className="col-md-3" key={product.id}>
         <div className="thumbnail text-center">

          <a
            href={`#${product.id}`}
          >
            <img src={`products/${product.sku}.png`} alt={product.title} />
            <p>{product.title}</p>
          </a>

          <b>{util.formatCurrency(product.price)}</b>

          <button
            className="btn btn-success"
            href={`#${product.id}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            + Add to Bag
          </button>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Items);
