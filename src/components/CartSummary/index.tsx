import React from "react";
import {Dropdown, Label} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks.ts";

const CartSummary: React.FC = () => {
    const {cartItems} = useAppSelector(state => state.cart)

    return (
        <>
            <Dropdown item text='Basket'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem) => (
                            <Dropdown.Item key={cartItem.product.id}>
                                {cartItem.product.productName}&nbsp;
                                <Label>
                                    {cartItem.quantity}
                                </Label>
                            </Dropdown.Item>

                        ))
                    }
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to={"/cart"}>
                        Go to cart
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default CartSummary