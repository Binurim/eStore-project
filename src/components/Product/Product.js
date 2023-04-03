import "./_product.scss";

const products = [
  require("../../assets/images/coat.jpg"),
  require("../../assets/images/coat.jpg"),
  require("../../assets/images/coat.jpg"),
  require("../../assets/images/coat.jpg"),
];

const Product = () => (
  <div className="row">
    {products.map((product, index) => (
      <div className="card mt-2" style={{ width: "18rem" }}>
        <img className="card-img-top" src={product} alt="Card image cap" />
        <div className="card-body">
          <div className="product__item__text">
            <h6>
              <a href="#">Coat</a>
            </h6>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="product__price">$59.0</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Product;
