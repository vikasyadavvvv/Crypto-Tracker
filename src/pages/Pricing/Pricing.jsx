import { useContext, useEffect, useState } from "react";
import "./Pricing.css"; // Assuming you'll create a new CSS file for the PricingPage
import { CoinContext } from "../../context/CoinContext"; // Import CoinContext
import { Link } from "react-router-dom";

const Pricing = () => {
    const { allCoin, currency } = useContext(CoinContext); // Use CoinContext
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input , setInput]=useState('');
    const [loading, setLoading] = useState(true); // State for the loading spinner

    const inputHandler=(e)=>{
      setInput(e.target.value)
      if(e.target.value===''){
        setDisplayCoin(allCoin)
      }
    }

    const searchHandler= async(e)=>{
        e.preventDefault();
        const coins=await allCoin.filter((item)=>{
           return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins);
    }

    useEffect(() => {
        setDisplayCoin(allCoin);
        setLoading(false); // Set loading to false when data is fetched
    }, [allCoin]);

    return (
        <div className="pricing-page">
            <h1 className="Pricing">Pricing</h1>
            {loading ? ( // Conditionally rendering the spinner while loading
                <div className="spinner">
                    <div className="spin-circle">
                        <div></div>
                    </div>
                </div>
            ) : (
                <div className="crypto-table">
                    <div className="table-layout header">
                        <p>#</p>
                        <p>Coins</p>
                        <p>Price</p>
                        <p>24H Change</p>
                        <p>Market Cap</p>
                    </div>
                    {displayCoin.slice(0, 100).map((item, index) => (
                        <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div className="crypto-name">
                                <img src={item.image} className="crypto-image" alt={item.name} />
                                <p>{`${item.name} - ${item.symbol.toUpperCase()}`}</p>
                            </div>
                            <p>{`${currency.symbol} ${item.current_price.toLocaleString()}`}</p>
                            <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                                {`${(Math.floor(item.price_change_percentage_24h * 100) / 100).toFixed(2)}%`}</p>
                            <p>{`${currency.symbol} ${item.market_cap.toLocaleString()}`}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Pricing;
