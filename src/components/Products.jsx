import React from 'react'
import Grid from '@material-ui/core';
const products =[
    {id:1 , name:'Glass', description :'Running Glasses', price:'$53'},
    {id:2 , name:'Macbook', description :'Running Macbook', price:'$2500'}
]
const Products = () => {
<main>
    <Grid container justify ="center" spacing={4}>
        {products.map((product) =>(
     <Grid item key ={products.id} xs={12} sm={6} md={4} lg={3}>
       <Product product={product}/>
     </Grid>
        ))}
    </Grid> 
</main>
}
export default Products;
