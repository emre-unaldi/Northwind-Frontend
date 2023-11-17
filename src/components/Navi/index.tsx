import React, {useState} from "react";
import {Container, Menu} from 'semantic-ui-react'
import CartSummary from "../CartSummary";
import SignedOut from "../SignedOut";
import SignedIn from "../SignedIn";
import {useAppSelector} from "../../redux/hooks.ts";

const Navi: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
    const {cartItems} = useAppSelector(state => state.cart)

    return (
        <>
            <Menu inverted fixed={"top"}>
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu style={{alignItems: "center"}} position='right'>
                        {cartItems.length > 0 && <CartSummary/>}
                        {
                            isAuthenticated ?
                                <SignedIn setIsAuthenticated={setIsAuthenticated}/>
                                :
                                <SignedOut setIsAuthenticated={setIsAuthenticated}/>
                        }
                    </Menu.Menu>
                </Container>
            </Menu>
        </>
    )
}

export default Navi