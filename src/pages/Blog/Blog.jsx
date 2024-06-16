import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faClock } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-header">
        <h1>Introduction to Cryptocurrency Trading</h1>
        <div className="blog-meta">
          <div className="meta-item">
            <FontAwesomeIcon icon={faUser} />
            <span>Admin</span>
          </div>
          <div className="meta-item">
            <FontAwesomeIcon icon={faClock} />
            <span>June 25, 2024</span>
          </div>
        </div>
      </div>
      <div className="blog-content">
        <p>
          <strong>What is Cryptocurrency?</strong>
        </p>
        <p>
          Cryptocurrency is a digital or virtual currency that uses
          cryptography for security and operates on decentralized networks based
          on blockchain technology. Unlike traditional currencies issued by
          governments, cryptocurrencies are not controlled by any central
          authority.
        </p>
        <p>
          <strong>Significance of Cryptocurrency in the Financial World</strong>
        </p>
        <p>
          Cryptocurrencies have gained significant popularity and recognition
          in the financial world due to several reasons:
        </p>
        <ul>
          <li>
            <strong>Decentralization:</strong> Cryptocurrencies operate on
            decentralized networks, allowing for peer-to-peer transactions
            without the need for intermediaries such as banks or governments.
          </li>
          <li>
            <strong>Security:</strong> Cryptography ensures the security and
            integrity of cryptocurrency transactions, making them resistant to
            fraud and hacking.
          </li>
          <li>
            <strong>Accessibility:</strong> Cryptocurrencies enable people to
            participate in the global economy, especially in regions with
            limited access to traditional banking services.
          </li>
          <li>
            <strong>Innovation:</strong> The blockchain technology underlying
            cryptocurrencies has the potential to revolutionize various
            industries by enabling secure and transparent record-keeping.
          </li>
        </ul>
        {/* Continue with the remaining content */}
      </div>
    </div>
  );
};

export default Blog;
