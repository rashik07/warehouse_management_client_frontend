import React, { useEffect, useState } from 'react';
import { Divider, Popconfirm, Table } from 'antd';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = id =>{
       console.log(id);
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        
    }
  const columns = [
    // {
    //     title: 'ID',
    //     dataIndex: '_id',
       
    //   },
    {
      title: 'Name',
      dataIndex: 'name',
     
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) =>
        products.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record._id)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
  ];
  
  return (
    <div>
      <Table columns={columns} dataSource={products} />
    </div>
  );
};

export default ManageInventory;
