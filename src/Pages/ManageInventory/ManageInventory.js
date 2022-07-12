import React, { useEffect, useState } from "react";
import { Button, Divider, Popconfirm, Table } from "antd";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://floating-spire-21538.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

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
    // {
    //     title: 'ID',
    //     dataIndex: '_id',

    //   },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
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
              height: "100vh",
            }}
          >
            <h1>All Products</h1>
            <Button type="primary" style={{ float: "right", margin: "10px" }}>
              <Link to="/addProduct">Add Product</Link>
            </Button>
            <Table columns={columns} dataSource={products} />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default ManageInventory;
