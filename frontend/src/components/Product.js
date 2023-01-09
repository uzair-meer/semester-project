import { Link } from "react-router-dom";
import "./product.css";
const Product = () => {
  return (
    <div className="product">
      <img
        src="https://cdn.shopify.com/s/files/1/0317/4894/8103/products/suits_0003_Republic-622.png?v=1669305820"
        alt="productName"
      />
      <div className="product_info">
        <p className="info_name">Texudo</p>
        <p className="info_descrp">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <p className="info_price">13550pkr</p>
        <Link to={`/product/${111}`} className="info_btn">
          {" "}
          View
        </Link>
      </div>
    </div>
  );
};
export default Product;
