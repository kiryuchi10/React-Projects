import React from 'react';

const OrdersList = ({ orders, selectedDate }) => {
    return (
        <div>
            <h2>Orders for {selectedDate}</h2>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>{order.details}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrdersList;
