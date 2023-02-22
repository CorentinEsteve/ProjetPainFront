import React from 'react';

function Products(props) {
    const { data } = props;



    return (

        <div className="product-section">

            <h2>Our products</h2>

            <div className="products">

                {data && data[0]?.map((product) => (
                    
                    <div className="product" key={product.id}>
                        <h3>{product.name}</h3>
                        <p className="description">{product.description}</p>
                        <p className="price">{product.price}€</p>
                    </div>
                ))}
                
            </div>

        </div>

    )
}

export default Products;
