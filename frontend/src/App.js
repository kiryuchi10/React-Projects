import React, { useState } from 'react';
import CalendarComponent from './components/Calendar'; // Import CalendarComponent
import OrdersList from './components/OrdersList';
import { getBookOrders, getOrdersByDate } from './apiService'; // Import API functions

const App = () => {
    const [orders, setOrders] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');

    // Function to fetch all orders
    const fetchAllOrders = async () => {
        try {
            const allOrders = await getBookOrders();
            setOrders(allOrders);
        } catch (error) {
            console.error('Error fetching all orders', error);
        }
    };

    // Handle date click event
    const handleDateClick = async (date) => {
        try {
            const ordersForDate = await getOrdersByDate(date);
            setOrders(ordersForDate);
            setSelectedDate(date);
        } catch (error) {
            console.error('Error fetching orders for date', error);
        }
    };

    return (
        <div className="App">
            <h1>Book Orders Calendar</h1>
            <button onClick={fetchAllOrders}>Fetch All Orders</button>
            <CalendarComponent onDateClick={handleDateClick} />
            <OrdersList orders={orders} selectedDate={selectedDate} />
        </div>
    );
};

export default App;
