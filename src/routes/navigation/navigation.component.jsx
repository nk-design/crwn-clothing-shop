import {Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {NavLink,NavLinks,NavigationContainer,LogoContainer} from "./navigation.styles";
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
      <NavigationContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <NavLinks>
            <NavLink to="/shop">
                SHOP
            </NavLink>
            {currentUser?(<span onClick={signOutUser}>Sign Out</span>):(<NavLink to="/sign-in">Sign in</NavLink>)}
            <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;