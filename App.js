
import {Route,Routes} from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Signup from "./Component/Signup";
import { Auth } from "./Component/Auth";
import Admin from "./Component/Admin"
import Login from "./Component/Login";
import User from "./Component/User";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Service from "./Component/Service";
 function App() {
  return (
    <div className="App">
      <Auth/>
      <Navbar/>
      <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/admin" element={<Admin/>}/>
     <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Service/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}
export default App;
