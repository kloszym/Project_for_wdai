import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";
import Contact from "./pages/Contact.tsx";
import NoPage from "./pages/NoPage.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import styles from "./pages/background.module.css";
import { Link } from "react-router-dom";
import Product from "./pages/Product.jsx";
import SignIn from "./pages/SignIn.tsx";
import Search from "./pages/Search.tsx";

interface Product_interface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
  count: number;
}


const App = () => {
  const [products, setProducts] = useState([])
  
    useEffect(() => {
        fetch('http://localhost:3002/shop')
            .then(res => res.json())
            .then((product) => {
                setProducts(product)
            })
    }, [])
    
    {products.map((prod: Product_interface) => (
      <Link to={'/product/' + prod.id} />
    ))}

  return (
    <div className={styles.background}>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<Product />}/>
          <Route path="search/:tytul" element={<Search/>}/>
          <Route path="signin" element={<SignIn />}/>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;