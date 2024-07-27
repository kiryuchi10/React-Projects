import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css'; // Import the default CSS styles for the calendar
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

// Define your CalendarComponent
const CalendarComponent = ({ onDateClick }) => {
    const [date, setDate] = useState(new Date());

    // Handle date change
    const handleDateChange = (newDate) => {
        setDate(newDate); // Update the selected date
        onDateClick(newDate.toISOString().split('T')[0]); // Format date and pass it to parent
    };

    return (
        <div>
            <Calendar
                onChange={handleDateChange} // Set the date change handler
                value={date} // Controlled value of the calendar
            />
        </div>
    );
};

// Export CalendarComponent as default
export default CalendarComponent;



// Fetch all book orders
export const getBookOrders = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/orders/all`);
        return response.data;
    } catch (error) {
        console.error('Error fetching book orders', error);
        throw error;
    }
};

// Fetch book orders by date
export const getOrdersByDate = async (date) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/orders/${date}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders by date', error);
        throw error;
    }
};
