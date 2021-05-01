import React from "react";
import { connect } from "react-redux";
import util from "../../util";
import { addToCart, removeFromCart } from "../../actions/cartActions";

class Orders extends React.Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div>
        {cartItems.length === 0 ? (
          "You have ordered:"
        ) : (
          <div>
            You have {cartItems.length} items. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul className = "cartItems">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    onClick={(e) =>
                    this.props.removeFromCart(this.props.cartItems, item)}>Remove</button>
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
              onClick={() => alert("Thanks for your order! :))")}>Order</button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Orders);
