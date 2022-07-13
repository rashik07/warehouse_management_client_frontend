import React from 'react';
import { Layout, Menu } from 'antd';
const Footer = () => {
    const { Header, Content, Footer, Sider } = Layout;
    return (
        <Footer
        style={{
          textAlign: 'center',
          background:"#001529",
          color: "white"
        }}
        className="footer"
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    );
};

export default Footer;