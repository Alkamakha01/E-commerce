import Navbar from "./Component/Navbar/Navbar";
import{BrowserRouter,Routes,Route}from'react-router-dom';
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSingup from "./Pages/LoginSingup";
import Callback from "./Component/papular/Callback";
import Login from "./Pages/Login";
import men_banner from'./Component/Assets/banner_mens.png';
import women_banner from'./Component/Assets/banner_women.png';
import kids_banner from'./Component/Assets/banner_kids.png';


function App() {
  return (
    <div>
      

        <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSingup/>}/>
      <Route path="/sigin" element={<Login/>}/>
     </Routes>
     </BrowserRouter> 
      
    </div>
  );
}

export default App;
