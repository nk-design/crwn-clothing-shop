import { useContext } from "react"
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles"
import Button from "../button/button.component"
import { CartContext } from "../../contexts/cart.context"
import CartItem from "../cart-item/cart-item.component"
import { useNavigate } from "react-router-dom"

const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const checkoutRedirect = () => navigate("/checkout")
    
    return <CartDropdownContainer>
        <CartItems>
            {cartItems.length?cartItems.map((cartItem)=>{
                return <CartItem key={cartItem.id} item={cartItem}/>
             }):<EmptyMessage>No items in Cart</EmptyMessage>}
        </CartItems>
        <Button onClick={checkoutRedirect}>Checkout</Button>
        
    </CartDropdownContainer>
}

export default CartDropdown