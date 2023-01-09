import CartItem from "./CartItem";
import "./cartScreen.css";

const CartScreen = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen_left">
        <h2>shopping cart</h2>
        <CartItem />
      </div>
      <div className="cartscreen_right">
        <div className="cartscreen_info">
          <p>Subtotal(0) items</p>
          <p> pkr 13450</p>
        </div>
        <div>
          <button>proceed to checkOut</button>
        </div>
      </div>
    </div>
  );
};
export default CartScreen;
