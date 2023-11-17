import React from "react";
import {Menu} from "semantic-ui-react";

const Categories: React.FC = () => {
    return (
        <>
            <Menu pointing vertical>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />
                <Menu.Item
                    name='friends'
                />
            </Menu>
        </>
    )
}

export default Categories