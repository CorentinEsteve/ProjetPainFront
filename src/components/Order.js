import React, { useState } from 'react';

function Order(props) {
    const { data } = props;

    const [orderCount, setOrderCount] = useState(1);

    const addOrderForm = () => {
        setOrderCount(orderCount + 1);
        // const deleteBtn = document.getElementById(`deleteBtn${orderCount}`);
        // deleteBtn.style.display = "flex";
    }

    const deleteOrderForm = (index) => {
        const orderForm = document.getElementById(`orderForm${index}`);
        orderForm.remove()
    }
    
    const goToCard2 = () => {
        const firstCard = document.getElementById("card1");
        firstCard.style.display = "none";

        const secondCard = document.getElementById("card2");
        secondCard.style.display = "flex";
    }

    const goToCard3 = () => {
        const firstCard = document.getElementById("card2");
        firstCard.style.display = "none";

        const secondCard = document.getElementById("card3");
        secondCard.style.display = "flex";
    }

    return (

        <form action="http://localhost:3001/api/orders" method="POST">

            <div className="first-section">
                <div className="first-section-title">
                    <h1>Baguette.fr, family bread.</h1>
                </div>

                <div className="card-order" id="card1">
                    <h2>Order your bread</h2>
                    <p>Get your order fresh, right when you want it.</p>

                    <div className="order-form-container">

                        {/* <div className="order-form">
                            <input type="number" id={`quantity`} name={`quantity`} min="0" max="100" placeholder="0" />
                            <select name={`product`} id={`select`}>
                            {data && data[0]?.map((product) => (
                                <option key={product.name} value={product.name}>{product.name}</option>
                            ))}
                            </select>
                        </div> */}

                        <div id="order-content">

                            {[...Array(orderCount)].map((_, index) => (

                                <div key={index} id={`orderForm${index}`} className="order-form">
                                    <input type="number" id={`quantity${index}`} name={`quantity${index}`} min="0" max="100" placeholder="0" />
                                    
                                    <select name={`product${index}`} id={`select${index}`}>
                                    {data && data[0]?.map((product) => (
                                        <option key={product.name} value={product.name}>{product.name}</option>
                                    ))}
                                    </select>

                                    <button type="button" id={`deleteBtn${index}`} onClick={() => deleteOrderForm(index)}>X</button>
                                </div>

                            ))}

                        </div>

                        <button id="addBtn" type="button" onClick={addOrderForm}> + add something else</button>

                        <div className="order-form">
                            <input type="date" id="date" name="date" />
                            <input type="time" id="time" name="time" />
                        </div>

                        <div className="btns-order">
                            {/* <button type="button" id="submitBtn">Order</button> */}
                            <button type="button" class="goodBtn" id="validateOrder" onClick={goToCard2}>Order</button>
                        </div>
                    </div>
                </div>

                <div className="card-order2" id="card2" style={{ display: "none" }}>
                    <h2>Order your bread</h2>
                    <p>All right, who will be collecting the order?</p>

                    <div className="confirm-card">
                        <input type="text" id="username" name="username" placeholder="Name" />
                        <input type="email" id="email" name="email" placeholder="Email address" />
                    </div>

                    <div className="btns-order">
                        <button type="button" class="goodBtn" id="validateOrder">Order</button>
                    </div>
                </div>

                <div className="card-order3" id="card3" style={{ display: "none" }}>
                    <h2>Your order is a success!</h2>
                    <p>Your order has been sent, we'll be waiting for you blabla...</p>
                </div>

            </div>

        </form>

    );
}

export default Order;
