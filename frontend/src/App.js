import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import './App.css';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [orders, setOrders] = useState([]);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [hoveredOrders, setHoveredOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from your endpoint
    axios.get('/api/orders/all')
      .then(response => {
        const ordersArray = response.data.map(item => ({
          orderDate: item.orderDate,
          orderId: item.orderId,
          bookName: item.bookName,
          checked: item.checked
        }));
        setOrders(ordersArray);
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const onDateHover = (date) => {
    setHoveredDate(date);
    const hoveredDateString = date.toISOString().split('T')[0];
    const filteredOrders = orders.filter(order => order.orderDate.startsWith(hoveredDateString));
    setHoveredOrders(filteredOrders);
  };

  return (
    <div className="App">
      <h1>Order Calendar</h1>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date, view }) => {
          const dateString = date.toISOString().split('T')[0];
          const dailyOrders = orders.filter(order => order.orderDate.startsWith(dateString));
          return (
            dailyOrders.length > 0 && (
              <div className="dot">
                {dailyOrders.length}
              </div>
            )
          );
        }}
        onMouseOver={({ activeStartDate, date, view }) => onDateHover(date)}
      />
      {hoveredDate && hoveredOrders.length > 0 && (
        <div className="tooltip" style={{ top: `${hoveredDate.clientY}px`, left: `${hoveredDate.clientX}px` }}>
          <h3>Orders on {hoveredDate.toDateString()}</h3>
          <ul>
            {hoveredOrders.map(order => (
              <li key={order.orderId}>
                <p>Order ID: {order.orderId}</p>
                <p>Checked: {order.checked}</p>
                <p>Book Name: {order.bookName || 'N/A'}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
