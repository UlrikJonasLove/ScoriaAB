import React from "react";
import { connect } from "react-redux";
import util from "../../util";
import { addToCart } from '../../actions/cartActions';
import { fetchProducts } from "../../actions/productActions";

class Products extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div key={product.id}>
        <div>
          <a
            href={`#${product.id}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            <img src={`products/${product.sku}_1.png`} alt={product.title} />
            <p className = 'product-title'>{product.title}</p>
            <p className = 'product-desc'>{product.description}</p>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <hr />
        </div>
      </div>
    ));

    return <div className = 'product-items'>{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
