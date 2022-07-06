import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Button } from "antd";
import {
    GoogleOutlined
  } from '@ant-design/icons';
const Social_Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate= useNavigate();
    let errorElement;
    if (error) {
        errorElement = <p style={{color:"red"}}>Error: {error?.message}</p>
    }

      if(user){
        navigate("/home");
      }
    return (
        <div>
              {errorElement}
             <Button onClick={() => signInWithGoogle()}><GoogleOutlined />Google Login</Button>
        </div>
    );
};

export default Social_Login;