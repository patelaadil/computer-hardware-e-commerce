import {useLocation} from 'react-router-dom'
import Product from './produts.json';
import './Home.css';
import { useEffect, useState } from 'react';

function Search() {

  const products = Product.all_prod;

  const query = new URLSearchParams(useLocation().search);
  const searchText = query.get("text") || "";

  const [filterProduct, setProducts] = useState([]);
  const [boxHeight,setHeight] = useState('0px');

  useEffect(() => {

    if(searchText.trim()!=""){
  
      const result = products.filter((prod) =>
        prod.name.toLowerCase().includes(searchText.toLowerCase())
      );

      setProducts(result);
      document.getElementById("message").innerText="";
      setHeight('0px')

    }else{
      document.getElementById("message").innerText="Search proper product !";
      const result = []
      setProducts(result);
      setHeight('350px');
    }

  }, [searchText]);


  const handleAddToCart = (product) => {
    
    const existingCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const productIndex = existingCart.findIndex(item => item.id === product.id);

    if (productIndex !== -1) {
      existingCart[productIndex].qty += 1;
    } else {
      existingCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.path,
        qty: 1
      });
    }

    sessionStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`${product.name} added to cart! 🛒`);
  };


  return (
    <div className='Search'>
  
      
      <div className="prod_gallary">
        <div className="product-grid">
         {filterProduct.map((img) => (
            <div className="product-card">
              <img src={img.path} alt={img.name} />
              <h3>{img.name}</h3>
              <p>₹{img.price}</p>
              <button onClick={() => handleAddToCart(img)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

    <div id='message' 
    style={{
      fontSize:'30px',
      fontWeight:'400',
      textAlign:'center',
      height: boxHeight,
      alignContent:'start'
    }}>
    </div>

    </div>
  )
}

export default Search
