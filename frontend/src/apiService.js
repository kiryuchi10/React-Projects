import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

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
