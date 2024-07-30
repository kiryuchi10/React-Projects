/*import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import './App.css';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [orders, setOrders] = useState([]);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [hoveredOrders, setHoveredOrders] = useState([]);
  const [tooltipPosition, setTooltipPosition] = useState({ top: '0px', left: '0px', display: 'none' });

  useEffect(() => {
    // Fetch orders from your endpoint
    axios.get('/api/orders/all')
      .then(response => {
        const ordersArray = response.data.map(item => ({
          orderDate: item.orderDate.split('T')[0], // Format date for comparison
          orderId: item.orderId,
          bookName: item.bookName,
          checked: item.checked
        }));
        setOrders(ordersArray);
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const onDateHover = (event, date) => {
    const dateString = date.toISOString().split('T')[0];
    const filteredOrders = orders.filter(order => order.orderDate === dateString);
    setHoveredDate(date);
    setHoveredOrders(filteredOrders);

    const { top, left } = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      top: `${top + 40}px`, // Position the tooltip below the hovered date
      left: `${left}px`,
      display: 'block'
    });
  };

  const onDateLeave = () => {
    setTooltipPosition({ display: 'none' });
  };

  return (
    <div className="App">
      <h1>Order Calendar</h1>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date }) => {
          const dateString = date.toISOString().split('T')[0];
          const dailyOrders = orders.filter(order => order.orderDate === dateString);
          return (
            dailyOrders.length > 0 && (
              <div
                className="dot"
                data-date={dateString}
                onMouseOver={(e) => onDateHover(e, date)}
                onMouseLeave={onDateLeave}
              >
                {dailyOrders.length}
              </div>
            )
          );
        }}
      />
      {hoveredOrders.length > 0 && (
        <div className="tooltip" style={tooltipPosition}>
          <h3>Orders on {hoveredDate?.toDateString()}</h3>
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

export default App;*/
