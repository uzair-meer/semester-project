import "./productScreen.css";
const ProductsScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen_left">
        <div className="left_img">
          <img
            src="https://cdn.shopify.com/s/files/1/0317/4894/8103/products/suits_0003_Republic-622.png?v=1669305820"
            alt="productName"
          />
        </div>
        <div className="left_info">
          <p className="left_name">product1</p>
          <p>price:13450pkr</p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </div>
      <div className="productscreen_right">
        <div className="right_info">
          <p>
            price <span>pkr:12345</span>
          </p>
          <p>
            status: <span>in stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductsScreen;
