# Zerodha Clone - Full Stack Trading Platform

A full-stack clone of Zerodha's trading platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This application provides a simplified yet functional trading interface with real-time market data, order placement, portfolio tracking, and user authentication.

## 🚀 Features

### User Authentication
- Secure JWT-based authentication
- User registration and login
- Protected routes
- Session management

### Trading Dashboard
- Real-time stock price updates
- Interactive charts and market data
- Order placement (Market/Limit orders)
- Portfolio overview
- Order history
- Position tracking

### Order Management
- Buy/Sell orders
- Order history with status tracking
- Position management
- Real-time order updates

### Portfolio
- Current holdings
- Profit/Loss tracking
- Asset allocation
- Historical performance

## 🛠 Tech Stack

### Frontend
- **React.js** - Frontend library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Chart.js** - Data visualization
- **TailwindCSS** - Styling
- **React Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### Development Tools
- **Git** - Version control
- **Postman** - API testing
- **MongoDB Compass** - Database management

## 📦 Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (v4.4+)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zerodha-clone.git
   cd zerodha-clone
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Update .env with your configuration
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Update .env with your configuration
   npm start
   ```

4. **Environment Variables**
   Create a `.env` file in both `backend` and `frontend` directories with the following variables:
   
   **Backend (.env)**
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

   **Frontend (.env)**
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

## 🚀 Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Get order by ID
- `DELETE /api/orders/:id` - Cancel an order

### Portfolio
- `GET /api/portfolio` - Get user portfolio
- `GET /api/portfolio/positions` - Get open positions
- `GET /api/portfolio/holdings` - Get current holdings

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Zerodha for the inspiration
- All open-source libraries used in this project
- The amazing developer community

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any queries, please contact [your-email@example.com](mailto:your-email@example.com)

---

<div align="center">
  Made with ❤️ by [Your Name]
</div>
