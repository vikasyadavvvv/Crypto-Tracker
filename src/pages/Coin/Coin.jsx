import { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
    const { coinId } = useParams();
    const [coinData, setCoinData] = useState(null);
    const [historicalData, setHistoricalData] = useState(null);
    const { currency } = useContext(CoinContext);

    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-kgNLUZFDxR3WkMCcfKkfWF2F' }
        };
        try {
            console.log(`Fetching coin data for ID: ${coinId}`);
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
            if (!response.ok) {
                throw new Error(`Error fetching coin data: ${response.statusText}`);
            }
            const data = await response.json();
            console.log('Coin data:', data); // Log the coin data
            setCoinData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchHistoricalData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-kgNLUZFDxR3WkMCcfKkfWF2F' }
        };
        try {
            console.log(`Fetching historical data for ID: ${coinId}, Currency: ${currency.name}`);
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options);
            if (!response.ok) {
                throw new Error(`Error fetching historical data: ${response.statusText}`);
            }
            const data = await response.json();
            console.log('Historical data:', data); // Log the historical data
            setHistoricalData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCoinData();
        fetchHistoricalData();
    }, [currency]);

    if (coinData && historicalData) {
        const { market_data } = coinData;

        console.log('Market data:', market_data); // Log the market data

        const currentPrice = market_data?.current_price?.[currency.name];
        const marketCap = market_data?.market_cap?.[currency.name];
        const high24 = market_data?.high_24h?.[currency.name];
        const low24 = market_data?.low_24h?.[currency.name];

        console.log('Current price:', currentPrice);
        console.log('Market cap:', marketCap);
        console.log('24H High:', high24);
        console.log('24H Low:', low24);

        return (
            <div className="coin">
                <div className="coin-name">
                    <img src={coinData.image.large} alt={`${coinData.name} logo`} />
                    <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
                </div>
                <div className="coin-chart">
                    <LineChart historicalData={historicalData} />
                </div>
                <div className="coin-info">
                    <ul>
                        <li>Crypto Market Rank</li>
                        <li>{coinData.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Current Price</li>
                        <li>{currency.symbol}{currentPrice?.toLocaleString() || 'N/A'}</li>
                    </ul>
                    <ul>
                        <li>Market Cap</li>
                        <li>{currency.symbol}{marketCap?.toLocaleString() || 'N/A'}</li>
                    </ul>
                    <ul>
                        <li>24H High</li>
                        <li>{currency.symbol}{high24?.toLocaleString() || 'N/A'}</li>
                    </ul>
                    <ul>
                        <li>24H Low</li>
                        <li>{currency.symbol}{low24?.toLocaleString() || 'N/A'}</li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="spinner">
                <div className="spin-circle">
                    <div></div>
                </div>
            </div>
        );
    }
};

export default Coin;
