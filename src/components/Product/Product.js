import "./_product.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "../../redux/actions/product/productAction"

const Product = () => {
  const dispatch = useDispatch();
  const {product: {products}} = useSelector((obj)=>obj);

  useEffect(() => {
    dispatch(actions.getProducts());
  }, [])
  
  return (
  <div className="row">
    {products.map((product, index) => (
      <div className="card mt-2"  key={index} style={{ width: "18rem" }}>
        <img className="card-img-top" src={product.imageSrc} alt="Card image cap" />
        <div className="card-body">
          <div className="product__item__text">
            <h6>
              <a href="#">{product.name}</a>
            </h6>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="product__price">{product.price}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
)};

export default Product;
