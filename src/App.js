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
      }
    ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}


export default App;

