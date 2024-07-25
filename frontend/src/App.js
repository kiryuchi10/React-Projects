import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [orders, setOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders/all')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the orders!', error);
      });
  }, []);

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    
    axios.get(`/api/orders/${date}`)
      .then(response => {
        setFilteredOrders(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the orders by date!', error);
      });
  };

  return (
    <div className="App">
      <h1>Book Orders</h1>
      <label>
        Select Date:
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </label>
      <h2>All Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Branch ID</th>
            <th>Order Date</th>
            <th>Checked</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.branchId}</td>
              <td>{order.orderDate}</td>
              <td>{order.checked}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDate && (
        <>
          <h2>Orders for {selectedDate}</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Branch ID</th>
                <th>Order Date</th>
                <th>Checked</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.branchId}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.checked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
