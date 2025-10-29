import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
    const token = localStorage.getItem('token');
    console.log('Fetching orders with token:', token);
    
    try {
        const response = await axios.get("http://localhost:5000/allorders", {
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log('Orders response:', response.data);
        setAllOrders(response.data.data || []);
    } catch (error) {
        console.error("Error details:", {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        setError("Failed to fetch orders. Please try again later.");
    } finally {
        setIsLoading(false);
    }
};

    fetchOrders();
  }, [navigate]);

  if (isLoading) {
    return <div className="loading">Loading your orders...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="orders">
      <h2>Your Orders</h2>
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet</p>
          <Link to="/dashboard" className="btn">
            Start Trading
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={order._id || index}>
                  <td>{order.stock || order.name}</td>
                  <td>{order.quantity || order.qty}</td>
                  <td>₹{order.price?.toFixed(2) || 'N/A'}</td>
                  <td>₹{((order.price || 0) * (order.quantity || order.qty || 0)).toFixed(2)}</td>
                  <td className={order.type === "BUY" ? "text-success" : "text-danger"}>
                    {order.type || order.mode}
                  </td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;