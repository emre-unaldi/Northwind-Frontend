import React from "react";
import {Button} from "semantic-ui-react";

interface SignedOutProps {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}
const SignedOut: React.FC<SignedOutProps> = ({setIsAuthenticated}) => {
    return (
        <div style={{marginTop:8, marginBottom: 9}}>
            <Button primary onClick={() => setIsAuthenticated(true)}>Sign In</Button>
            <Button primary style={{marginLeft: "0.5em"}} >Sign Up</Button>
        </div>
    )
}

export default SignedOut