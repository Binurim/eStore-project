import './_topmenu.scss';
import { connect } from 'react-redux';
import { getTopMenu } from '../../redux/actions/topMenu/menuAction';

//const menuItems = ['Home', 'Women', 'Men', 'Kids', 'Best Seller'];
const TopMenu = (props) => (
  <>
    <header className="menuHeader">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-12">
            <nav className='menu'>
              <ul>
                {props.state.topMenu.map((menuItem, index) => (
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

const mapStateToProps = (state) => {
  return {state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMenu: dispatch(getTopMenu())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (TopMenu);

/**
 *  mapDispatchToProps is optional --> if mapStateToProps not available 
 * (null, mapDispatchToProps)
 */
