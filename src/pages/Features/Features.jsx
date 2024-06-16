// App.js
import { FaChartLine, FaMoneyBillWave, FaUserAlt, FaExchangeAlt } from 'react-icons/fa';
import "./Features.css"

const Features = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Crypto Price Tracker</h1>
      </header>
      <main>
          <div className="feature">
           <FaMoneyBillWave className="icon" />
             <h2>Multiple Cryptocurrencies</h2>
             <p>Track and analyze prices, market capitalization, and 24-hour changes for a wide range of cryptocurrencies.</p>
           </div>

        <div className="feature">
          <FaUserAlt className="icon" />
          <h2>User-Friendly Design</h2>
          <p>Enjoy a seamless experience with our intuitive and easy-to-navigate interface.</p>
        </div>
        <div className="feature">
          <FaChartLine className="icon" />
          <h2>Interactive Charts</h2>
          <p>Utilize our detailed and interactive charts to track price movements and analyze historical data.</p>
        </div>
        <div className="feature">
          <FaExchangeAlt className="icon" />
          <h2>Multi-Currency Support</h2>
          <p>View prices in INR, USD, and EUR to make well-informed decisions based on global market trends.</p>
        </div>
      </main>
    </div>
  );
};

export default Features;
