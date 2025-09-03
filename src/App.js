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
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
      {
        path:'/',
        element:<><Navbar/><Home /><Footer /></>
      },
      {
        path:'/product',
        element:<><Navbar/><Product /><Footer /></>
      },
      {
        path:'/login',
        element:<><Navbar/><Login /></>
      },
      {
        path:'/register',
        element:<><Navbar/><Register /></>
      },
      {
        path:'/contact',
        element:<><Navbar/><Contact /><Footer /></>
      },
      {
        path:'/about',
        element:<><Navbar/><About /><Footer /></>
      },
      {
        path:'/cart',
        element:<><Navbar/><Cart /><Footer /></>
      },
      {
        path:'/mouse',
        element:<><Navbar/><Mouse /><Footer /></>
      },
      {
        path:'/keyboard',
        element:<><Navbar/><Keyboard /><Footer /></>
      },
      {
        path:'/graphics',
        element:<><Navbar/><Graphics /><Footer /></>
      },
      {
        path:'/webcam',
        element:<><Navbar/><Webcam /><Footer /></>
      },
      {
        path:'/HDD',
        element:<><Navbar/><HDD /><Footer /></>
      },
      {
        path:'/SSD',
        element:<><Navbar/><SSD /><Footer /></>
      },
      {
        path:'/RAM',
        element:<><Navbar/><RAM /><Footer /></>
      },
      {
        path:'/headset',
        element:<><Navbar/><Headset /><Footer /></>
      }
    ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}


export default App;

