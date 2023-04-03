import "./_header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-3">
            <div className="header__logo">
              <font>eStore</font>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mt-1 mb-1">
            <div className="input-group">
              <div className="input-group-prepend">
                <select className="form-control btn btn-success dropdown-toggle">
                  <option>ALL</option>
                  <option>MEN</option>
                  <option>WOMEN</option>
                </select>
              </div>
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button className="form-control btn btn-success">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 mt-2">
            <div className="header__right">
              <div className="auth">
                <a href="#">Sign-in /</a>
                <a href="#"> Sign-up</a>
              </div>
              <ul className="widget">
                <li>
                  <i className="fa fa-heart"></i>
                </li>
                <li>
                  <i className="fa fa-shopping-cart"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
