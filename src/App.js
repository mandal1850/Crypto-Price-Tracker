import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Coin from './Components/Coin'
import Spinner from './Components/Spinner'
import Header from './Components/Header'


function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {
    const crypto = async () => {
      const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=40&page=1&sparkline=false')
      setCoins(data)
    }
    crypto();
  }, [])
  
  const handleChange = e => {
    setSearch(e.target.value)
  }

  // when comparing strings and characters .includes is case sensitive and therefore we have 
  // used .toLowerCase function before comparing

  //also use .toString function if string values need to be compared
  const filteredCoins = coins.filter(coin => 
      coin.name.toString().toLowerCase().includes(search.toString().toLowerCase())
    )

  return (
    <div>
      <div>
      <Header />
      </div>
    <div className="coin-api">
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
        <form>
          <input
            type='text'
            placeholder='SEARCH'
            className='coin-input'
            onChange={handleChange}
          />
        </form>
      </div>
      {coins.length === 0 ? <Spinner /> : 
          filteredCoins.map(coin => {
            return (
              <Coin
                key={coin.id}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketcap={coin.market_cap}
                volume={coin.total_volume}
              />
            )
          })
      }

    </div>
    </div>

    
  );
}

export default App;



