
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
import Login from './Pages/Login_Registration/Login';
import Registration from './Pages/Login_Registration/Registration';
import RequreAuth from './Pages/Login_Registration/RequreAuth';
import AddProduct from './Pages/AddProduct/AddProduct';
import Blogs from './Pages/Blogs/Blogs';
import Page_404 from './Pages/404_page/Page_404';
import MyItems from './Pages/MyItems/MyItems';

function App() {

  return (
    <div className="App">
      <Layout>


        <Headers></Headers>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
         
          <Route path='/inventory/:product_id' element={<RequreAuth> <ProductDetails></ProductDetails></RequreAuth> }></Route>
          <Route path='/manage' element={<RequreAuth><ManageInventory></ManageInventory></RequreAuth>}></Route>
          <Route path='/addProduct' element={<RequreAuth><AddProduct></AddProduct></RequreAuth>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/registration' element={<Registration></Registration>}></Route>
          <Route path='/myitems' element={<MyItems></MyItems>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='*' element={<Page_404></Page_404>}></Route>
          

        </Routes>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
