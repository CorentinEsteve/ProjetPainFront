import React from 'react';

function Header() {
    return (
        <header className="header">
            <h1>Pain.fr</h1>
            <nav>
                <ul>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/orders">My orders</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
