import './App.css';
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import About from './Pages/About';
import Register from './Pages/Register'
import Login from './Pages/Logn'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Mouse from './Pages/Categories/Mouse';
import Keyboard from './Pages/Categories/Keyboard';
import Graphics from './Pages/Categories/Graphics';
import Headset from './Pages/Categories/Headset';
import HDD from './Pages/Categories/HDD';
import SSD from './Pages/Categories/SSD';
import Webcam from './Pages/Categories/Webcam';
import RAM from './Pages/Categories/RAM';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />

        {/* Categories */}
        <Route path="/mouse" element={<Mouse />} />
        <Route path="/keyboard" element={<Keyboard />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/webcam" element={<Webcam />} />
        <Route path="/HDD" element={<HDD />} />
        <Route path="/SSD" element={<SSD />} />
        <Route path="/RAM" element={<RAM />} />
        <Route path="/headset" element={<Headset />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;

