import React from "react";
import { Button, Checkbox, Form, Input, Layout } from "antd";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {

  const navigate = useNavigate();
const onFinish = (values) => {
  console.log(values);
  const url = `http://localhost:5000/products`;
  fetch(url, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(values)
  })
  .then(res=> res.json())
  .then(result =>{
      console.log(result);
  } )
  navigate("/manage");
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
  return (
    <div>
      <h1>this is add product</h1>

      <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 10,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="quantity"
                name="quantity"
                rules={[
                  {
                    required: true,
                    message: "Please input your quantity!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="img"
                name="img"
                rules={[
                  {
                    required: true,
                    message: "Please input your img!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
             
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 8,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
    </div>
  );
};

export default AddProduct;
