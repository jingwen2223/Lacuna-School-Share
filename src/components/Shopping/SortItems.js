import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../../actions/shopping_cart";

class SortItems extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          {`${this.props.filteredProducts.length} available.`}
        </div>
        <div className="col-md-3">
          <label>
            {" "}
            Sort By Category
            <select
              className="btn btn-primary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              value={this.props.type}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">Relevance</option>
              <option value="T">Teacher Supplies</option>
              <option value="A">Arts and Crafts Supplies</option>
              <option value="C">Crayons,Markers,Glue</option>
              <option value="P">Paint Tools</option>
              <option value="S">Staplers</option>
              <option value="D">Dough and Foam Dough</option>
              <option value="O">Other Tools</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  type: state.products.type,
});
export default connect(mapStateToProps, { filterProducts })(SortItems);
