import React from 'react';
import { Link } from 'react-router-dom';
import { Menu,Layout} from "antd";

const Headers = () => {
    const { Header, Content, Sider } = Layout;
    return (
        <Header>
            <Menu theme="dark" mode="horizontal" >
                <Menu.Item>
                    <Link to='/home'>Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/manage'>Manage Inventories</Link>
                </Menu.Item>

            </Menu>
        </Header>
    );
};

export default Headers;