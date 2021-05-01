import React from 'react';
import Filter from '../logic/Filter';
import Products from '../logic/Products';
import Orders from '../logic/Orders';

class Product extends React.Component {
    render() {
        return(
            <main className = 'main-order-content'>
                <article>
                    <h1>Our Products</h1>
                        <Filter />
                    <hr />
                        <Products />
                    <hr />
                        <Orders />
                </article>
            </main>
        )
    }
}

export default Product;