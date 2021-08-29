import React from 'react';
import ProductDataCards from './components/ProductDataCards';
function Overview() {
    return (
        <div className="App">
            <div className="container">
                <h1>🌽 Node Farm 🥦</h1>

                <div className="cards-container">
                    <ProductDataCards />
                </div>
            </div>
        </div>
    );
}

export default Overview;