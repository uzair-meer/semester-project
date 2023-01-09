import Product from "../components/Product";
import "./homeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <h2 className="home_title">Latest Products</h2>
      <div className="home_products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};
export default HomeScreen;
