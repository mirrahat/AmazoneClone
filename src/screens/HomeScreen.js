
import React from 'react';
import Product from '../components/Product';
import data from '../data';
import { Link } from 'react-router-dom';
function HomeScreen(props) {
   
    return (
        <div>
            <div className="row center">
                {data.products.map(product => (
                    <Product key={product._id} product={product}></Product>
                ))}

            </div>
        </div>
    );
}

export default HomeScreen;