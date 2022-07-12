import React from "react";
import { Layout, Menu } from "antd";
const Blogs = () => {
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
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: "center",
              height: "100vh",
            }}
          >
            <h1>
              <strong>1. Difference between javascript and nodejs?</strong>
            </h1>
            <p>
              <strong>Ans:</strong> Javascript is a programming language
              although NodeJS is a Javascript runtime environment. Javascript
              need browser to run. node js helps javascript to run outside the
              browser.Javascript is used on the client-side. Node js is mostly
              used on the server-side.
            </p>

            <h1>
              <strong>2.Differences between sql and nosql databases?</strong>
            </h1>
            <p>
              <strong>Ans:</strong> SQL is a RELATIONAL DATABASE MANAGEMENT
              SYSTEM and Nosql is Non-relational or distributed database
              system.SQL databases have fixed or static or predefined schema.
              Nosql have dynamic schema
            </p>
            <h1>
              <strong>
                3.What is the purpose of jwt and how does it work?
              </strong>
            </h1>
            <p>
              <strong>Ans:</strong> JWT(JSON Web Token), is an open standard
              used to share security information between two parties — a client
              and a server. Each JWT contains encoded JSON objects, including a
              set of claims. JWTs are signed using a cryptographic algorithm to
              ensure that the claims cannot be altered after the token is
              issued.How does JWT token authentication? The authentication
              server verifies the credentials and issues a JWT signed using a
              private key. Moving forward, the client will use the JWT to access
              protected resources by passing the JWT in the HTTP Authorization
              header.{" "}
            </p>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Blogs;
