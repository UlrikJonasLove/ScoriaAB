import React from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../../actions/productActions";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <div>{`${this.props.filteredProducts.length} products found.`}</div>
        <div>
          <label>
            Order by
            <select
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to Highest</option>
              <option value="highestprice">Highest to Lowest</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            {" "}
            Filter By
            <select
              value={this.props.filter}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">All</option>
              <option value="api">Api</option>
              <option value="html">HTML</option>
              <option value="asp.net">ASP.NET Core</option>
              <option value="react">React</option>
              <option value="database">Database</option>
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
  size: state.products.filter,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filter
);
