import React from "react";
import "./LearnCrypto.css";

const LearnCrypto = () => {
  return (
    <div className="learn-crypto">
      <div className="section">
        <h2>What is Cryptocurrency?</h2>
        <p>
          Cryptocurrency is a type of digital or virtual currency that uses
          cryptography for security and operates independently of a central
          bank. Cryptocurrencies leverage blockchain technology to gain
          decentralization, transparency, and immutability.
        </p>
      </div>
      <div className="section">
        <h2>How Does Cryptocurrency Work?</h2>
        <p>
          Cryptocurrencies work using a technology called blockchain. A
          blockchain is a decentralized technology spread across many computers
          that manages and records transactions. Part of the appeal of this
          technology is its security.
        </p>
      </div>
      <div className="section">
        <h2>Types of Cryptocurrencies</h2>
        <p>
          There are thousands of different cryptocurrencies available today.
          Some of the most well-known cryptocurrencies include Bitcoin (BTC),
          Ethereum (ETH), Ripple (XRP), Litecoin (LTC), and many others.
        </p>
      </div>
      <div className="section">
        <h2>How to Invest in Cryptocurrency?</h2>
        <p>
          Investing in cryptocurrency can be done through various platforms
          and exchanges. It's essential to do thorough research and
          understand the risks involved before investing in cryptocurrencies.
          Some popular platforms for buying and selling cryptocurrencies
          include Coinbase, Binance, and Kraken.
        </p>
      </div>
      <div className="section">
        <h2>Benefits of Cryptocurrency</h2>
        <ul>
          <li>Decentralization</li>
          <li>Security</li>
          <li>Lower transaction fees</li>
          <li>Accessibility</li>
          <li>Transparency</li>
        </ul>
      </div>
      <div className="section">
        <h2>Risks of Cryptocurrency</h2>
        <ul>
          <li>Volatility</li>
          <li>Regulatory uncertainty</li>
          <li>Security concerns</li>
          <li>Market manipulation</li>
          <li>Technology risks</li>
        </ul>
      </div>
    </div>
  );
};

export default LearnCrypto;
