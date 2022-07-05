import React from 'react';
import Products from '../Products/Products';
import { Carousel, Image } from 'antd';

const Home = () => {
    const contentStyle = {
        height: '600px',
        color: 'yellow',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        backgroundImage: "url('https://static.wixstatic.com/media/35d9ec_91bf56b4e5fa4d949b22236c0f0cbc72~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      


    };
  
    return (
        <div>
            <Carousel >
                <div>
                    <h1 style={contentStyle}>Headphones Warehouse</h1>

                </div>

            </Carousel>
            <Products></Products>
        </div>
    );
};

export default Home;