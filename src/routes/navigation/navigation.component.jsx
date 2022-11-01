import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {signOutUser} from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () =>{
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext)

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
            {currentUser?(<span onClick={signOutUser}>Sign Out</span>):(<Link className="nav-link" to="/sign-in">Sign in</Link>)}
            <CartIcon />
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;