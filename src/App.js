import './App.css';
import Home from './Pages/Home'
import ProdDetails from './Pages/ProdDetails'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import Login from './Pages/Logn'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
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
        path:'/prod_detail',
        element:<><Navbar/><ProdDetails /><Footer /></>
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
        element:<><Navbar/><Contact /></>
      }
    ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}


export default App;

