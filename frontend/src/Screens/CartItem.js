import { Link } from "react-router-dom";
import "./cartItem.css";
const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem_img">
        <img
          src="https://cdn.shopify.com/s/files/1/0317/4894/8103/products/suits_0003_Republic-622.png?v=1669305820"
          alt="productName"
        />
      </div>
      <Link to={`/product/${111}`} className="cartitem_name">
        <p>Product 1</p>
      </Link>
      <p className="cartitem_price">pkr4555</p>
      <select
        className="caritem_select
      "
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartitem_dltbtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default CartItem;
