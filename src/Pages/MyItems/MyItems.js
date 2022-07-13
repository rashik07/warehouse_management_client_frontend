import React, { useEffect, useState } from "react";
import { Button, Divider, Popconfirm, Table } from "antd";
import { Layout, Menu } from "antd";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user, loading] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const email = user?.email;
  console.log(email);
  useEffect(() => {
    fetch(`https://floating-spire-21538.herokuapp.com/products/`)
      .then((res) => res.json())
      .then((data) => {
   
        const remaining = data.filter((product) => product.email == email);
        setProducts(remaining);
        console.log(remaining);
      });
  }, [user]);

  const handleDelete = (id) => {
    console.log(id);
    const url = `https://floating-spire-21538.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = products.filter((product) => product._id !== id);
        setProducts(remaining);
      });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        products.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record._id)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <div>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "24px 16px 16px",
            overflow: "initial",
          }}
        >
          <div
            // className="site-layout-background"
            style={{
              padding: 24,
              textAlign: "center",
            }}
          >
            <h1>My Products:{products.length}</h1>

            <Table columns={columns} dataSource={products} />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default MyItems;
