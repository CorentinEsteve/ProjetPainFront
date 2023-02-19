import React from 'react';

function Products(props) {
    const { data } = props;



    return (

        <div className="product-section">

            <h2>Our products</h2>

            <div className="products">

                {data && data[0]?.map((prod) => (
                    
                    <div className="product" key={prod.id}>
                        <h3>{prod.name}</h3>
                        <p className="description">{prod.description}</p>
                        <p className="price">{prod.price}€</p>
                    </div>
                ))}
                
            </div>

        </div>

    )
}

export default Products;
