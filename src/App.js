
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Home/Products/Products';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/HeaderFooter/Footer';
import 'antd/dist/antd.css';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Headers from './Pages/HeaderFooter/Headers';
import { Breadcrumb, Layout, Menu } from 'antd';

function App() {

  return (
    <div className="App">
      <Layout>


        <Headers></Headers>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
         
          <Route path='/productDetails/:product_id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/manage' element={<ManageInventory></ManageInventory>}></Route>
          

        </Routes>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
