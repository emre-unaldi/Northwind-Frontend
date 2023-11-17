import React from "react";
import {Dropdown, Image, Menu} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

interface SignedInProps {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const SignedIn: React.FC<SignedInProps> = ({setIsAuthenticated}) => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        setIsAuthenticated(false)
        navigate("/")
    }

    return (
        <div>
            <Menu.Item>
                <Image avatar spaced={"right"} src={"https://media.licdn.com/dms/image/D4D03AQGBmFHhat1fbQ/profile-displayphoto-shrink_400_400/0/1698070612764?e=1705536000&v=beta&t=M8d97BJ9WZJfklVFLsiogXxryBxPkuxrSYItmsqTsYo"} />
                <Dropdown pointing={"top left"} text={"Emre"}>
                    <Dropdown.Menu>
                        <Dropdown.Item text={"Profile"} icon={"info"}/>
                        <Dropdown.Item onClick={handleLogOut} text={"Log Out"} icon={"sign-out"}/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}

export default SignedIn