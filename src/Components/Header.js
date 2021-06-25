import React from "react";
import './Header.css'
function Header() {
  return (
    <header>
      <div className='to-left'>
        <h4>CryptoTracker</h4>
      </div>
      <div className='to-right'>
        <h4>CoinGecko API</h4>
      </div>
    </header>
  );
}

export default Header;
