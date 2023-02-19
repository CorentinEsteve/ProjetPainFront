import React from 'react';

function Order() {
    return (

        <div className="first-section">
            <div className="first-section-title">
                <h1>Baguette.fr, family bread.</h1>
            </div>
            <div className="first-section-order">
                <h2>Order your bread</h2>
                <p>Get your order fresh, right when you want it.</p>

                <form className="order-form-container">
                    <div className="order-form">
                        <input type="number" id="quantity" name="quantity" min="0" max="100" placeholder="0" />
                        <select name="product" id="select">
                            <option value="baguette">baguette</option>
                            <option value="tradition">baguette tradition</option>
                        </select>
                    </div>

                    <button id="addBtn" type="button"> + add something else</button>

                    <div className="order-form">
                        <input type="date" id="date" name="date" />
                        <input type="time" id="time" name="time" />
                    </div>

                    <div className="btns-order">
                        {/* <button type="button" id="submitBtn">Order</button> */}
                        <button type="button" id="submitBtn">Order</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Order;
