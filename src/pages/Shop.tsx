import styles from "./main_div.module.css";
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { NavLink } from "react-router-dom";


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

const Shop = () => {
    
    const [products, setProducts] = useState([])
    const [seenProducts, setSeenProducts] = useState<Product_interface[]>([])

    useEffect(() => {
        fetch('http://localhost:3002/shop')
            .then(res => res.json())
            .then((product) => {
                setProducts(product)
            })
    }, [])

        const [page, setPage] = useState(1);
        const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
            setPage(value);
        };
    
        useEffect(() => {
            const min = (page-1)+((page-1)*3);
            const max = min + 4;
            setSeenProducts(products.slice(min, max));
    
        }, [products,page])

    console.log(products)
    return (
        <div className={styles.base}>
            <div className={styles.columns}>
            {seenProducts.map((prod: Product_interface) => (
                <Card sx={{ maxWidth: 345, margin:"0 0.5% 2% 0" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={prod.image}
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div">
                    {prod.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', height:"15vh", overflow: "auto", textOverflow: "ellipsis"}}>
                    {prod.description}
                  </Typography>
                </CardContent>
                <CardActions>
                    <NavLink to={'/product/' + prod.id}>
                        <Button size="small">Zobacz szczegóły</Button>
                    </NavLink>
                    <NavLink to={'/koszyk'}>
                    <Button size="small">Dodaj do koszyka</Button>
                    </NavLink>
                </CardActions>
              </Card>
            ))}
            </div>
            <div className={styles.pagination}>
                <Pagination count={Math.floor((products.length)/4)+1} page={page} onChange={handleChange} />
            </div>
    </div>
  )
  };
  
  export default Shop;