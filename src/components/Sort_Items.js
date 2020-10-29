import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts} from "../actions/shopping_cart";

class Sort_Items extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">{`${this.props.filteredProducts.length} available.`}
        </div>
        <div className="col-md-3">
          <label>
            {" "}
            Sort By Category
            <select
              className="form-control" value={this.props.size}

              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                      event.target.value
                );
              }}
            >
              <option value="">Relevance</option>
              <option value="x">Teacher Supplies</option>
              <option value="s">Arts and Crafts Supplies</option>
              <option value="m">Crayons,Markers,Glue</option>
              <option value="l">Paint Tools</option>
              <option value="xl">Staplers</option>
              <option value="xxl">Dough and Foam Dough</option>
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
  size: state.products.size,
});
export default connect(mapStateToProps, {filterProducts })(
  Sort_Items
);