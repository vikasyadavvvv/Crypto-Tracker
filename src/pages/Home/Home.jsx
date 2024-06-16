import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext"; // Import CoinContext
import { Link } from "react-router-dom";

const Home = () => {
    const { allCoin, currency } = useContext(CoinContext); // Use CoinContext
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input , setInput]=useState('')
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
        setDisplayCoin(coins)
    }

    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin]);

    return (
        <div className="home">
            <div className="hero">
                <h1>Largest <br />Crypto Marketplace</h1>
                <p>Welcome to the cryptocurrency marketplace.</p>
                <form onSubmit={searchHandler}>
                    <input onChange={inputHandler} value={input} list="coinlist" type="text" placeholder="Search crypto.." required/>
                         <datalist id="coinlist">
                          {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
                         </datalist>


                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="-table">
                <div className="table-layout header">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p>24H Change</p>
                    <p>Market Cap</p>
                </div>
                {displayCoin.slice(0, 10).map((item, index) => (
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
        </div>
    );
}

export default Home;
