import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from './product.module.css';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rate: number;
    count: number;
}

const Product = () => {
    
    const [product, setProduct] = useState<Product>({id: 0, title: '', price: 0, description: '', category: '', image: '', rate: 0, count: 0});
    const params = useParams();
    const navigate = useNavigate();
    
    
    useEffect(() => {
        const link = 'http://localhost:3002/product/'+params.id;
        console.log(link);
        fetch(link)
            .then(res => res.json())
            .then((prod) => {
                if (prod.length === 0) {
                    navigate('/404');
                }
                setProduct(prod[0])
            })
        
    }, [params.id])


    return (
        <div className={styles.background}>
            <div className={styles.product_container}>
                <img src={product.image} alt={product.title} style={{width:"auto", height:"50vh", margin:"3%", border:" 4mm ridge rgb(231, 221, 77)"}}/>
                <div className={styles.product_description}>
                    <label style={{fontSize:"3vw", width:"30vw"}}>{product.title}</label>
                    <div className = {styles.cart_container}>
                        <label style={{fontSize:"2vw", width:"auto"}}>Cena: {product.price} zł</label>
                        <NavLink to={'https://pl.yourpokerdream.com/grac-pokera-zasady-pokera-wyjasnione-prosty/grac-strip-poker-zasady-gry-strip/'}>
                            <Button variant="contained"> Dodaj do koszyka </Button>
                        </NavLink>                                                                                                                    
                    </div>
                
                </div>
            </div>
            <div className={styles.description}>
                <label style={{fontSize:"2vw"}}>Opis produktu:</label><br/>
                <label style={{fontSize:"1.5vw"}}>{product.description}</label>
            </div>
        </div>
  )
  };
  
  export default Product;