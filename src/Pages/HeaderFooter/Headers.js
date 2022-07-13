import React from "react";
import { Link } from "react-router-dom";
import { Menu, Layout, Button } from "antd";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const Headers = () => {
  const { Header, Content, Sider } = Layout;
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/manage">Manage Inventories</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/addProduct">Add Items</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/myitems">My Items</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blogs">Blogs</Link>
        </Menu.Item>
        {user ? (
          <Menu.Item>
            <Button onClick={handleSignOut}>sign out</Button>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};

export default Headers;
