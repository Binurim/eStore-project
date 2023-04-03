import './_topmenu.scss'

const menuItems = ['Home', 'Women', 'Men', 'Kids', 'Best Seller'];
const TopMenu = () => (
  <>
    <header className="menuHeader">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-12">
            <nav className='menu'>
              <ul>
                {menuItems.map((menuItem, index) => (
                  <li key={index}>
                    <a href="#">{menuItem}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default TopMenu;