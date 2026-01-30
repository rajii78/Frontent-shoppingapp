
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*  PUBLIC COMPONENTS */
import Home from "./comp/Home";
import Login from "./comp/Login";
import Registration from "./comp/Registration";
import Signin from "./comp/Signin";
import Wishlist from "./comp/Wishlist";
import UpdateDeletedetails from "./comp/UpdateDeletedetail";

/*  ADMIN COMPONENTS */
import Adminpanal from "./comp/Adminpanal";
import Details from "./comp/Details";
import Addtocard from "./comp/AddToCart";
import Adaddproduct from "./comp/Adaddproduct";

/*  BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login-admin" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Addtocard" element={<Addtocard />} />
        <Route path="/UpdateDeletedetails/:id" element={<UpdateDeletedetails />} />

        {/* Admin Layout */}
        <Route path="/Adminpanal" element={<Adminpanal />}>
          <Route index element={<Details />} />
          <Route path="Details" element={<Details />} />
          <Route path="Addtocard" element={<Addtocard />} />
          <Route path="Adaddproduct" element={<Adaddproduct />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
