import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './templates/home';
import Login from './templates/login';
import Dashboard from './dashboard';
import Signup from './templates/signup';
import ForgetPassword from "./templates/forgetPassword";
import NewPassword from "./components/sections/newPassword";
import Cart from "./templates/cart";
import Checkout from "./templates/checkout";
import ProductDetails from "./templates/productDetails";
import MyWishlist from "./templates/myWishlist";
import MyAccount from "./templates/myAccount";
import ProfileSec from "./components/sections/profileSec";
import UpiSec from "./components/sections/upiSec";
import ChatWithAgent from "./components/snippets/chatWithAgent";
import SecondHome from "./templates/secondHome";
import ProductsPage from "./templates/productsPage";
import HelpCenter from "./templates/helpCenter";
// import FilterPopup from "./components/pop-ups/filterPopup";

function App() {
  return (
    
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<SecondHome />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/productDetails" element={<ProductDetails />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route> 
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
          <Route path="/NewPassword" element={<NewPassword />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* extra routes  */}
          <Route path="/my-wishlist" element={<MyWishlist />}></Route>
          <Route path="/help-center" element={<HelpCenter />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/chat-with-agent" element={<ChatWithAgent />}></Route>
          <Route path="/myAccount" element={<MyAccount />}></Route>
          <Route path="/myAccount/:slug" element={<MyAccount />}></Route>
          {/* <Route path="/myAccount/payment/:slug_2" element={<PaymentSec />}></Route> */}
          {/* <Route path="/myAccount/:slug" element={<ProfileSec />}></Route> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;