
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Home/Products/Products';
import Header from './Pages/HeaderFooter/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/HeaderFooter/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
