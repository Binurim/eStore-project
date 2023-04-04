import "./_sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "../../redux/actions/product/productAction";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((obj) => obj);

  useEffect(() => {
    dispatch(actions.getProductCategories());
  }, []);

  return (
    <div>
      <div className="sidebar_category">
        <div className="section-title">
          <h4>Categories</h4>
        </div>
        {product.categories.map((item, index) => {
          return (
            <div className="category_accordian" key={index}>
              <div className="accordian">
                <div className="card">
                  <div className="card-heading">
                    <a href='#'>{item.category}</a>
                  </div>
                  <div className="card-body">
                    <ul>
                      {item.subCategory.map((subCategoryItem, index) => {
                        return (
                          <li key={index}>
                            <a href="#">{subCategoryItem.Name}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
