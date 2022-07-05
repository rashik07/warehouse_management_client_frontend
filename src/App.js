
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Home/Products/Products';
import Header from './Pages/HeaderFooter/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/HeaderFooter/Footer';
import 'antd/dist/antd.css';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ManageInventory from './Pages/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/productDetails/:product_id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/manage' element={<ManageInventory></ManageInventory>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
