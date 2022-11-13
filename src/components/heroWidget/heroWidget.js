import './heroWidget.css';
import { useEffect } from 'react';

function HeroWidget() {

  useEffect(() => {

      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
      script.async = true;
      script.innerHTML = JSON.stringify(  {
          "symbols": [
            {
              "proName": "FOREXCOM:SPXUSD",
              "title": "S&P 500"
            },
            {
              "proName": "FOREXCOM:NSXUSD",
              "title": "US 100"
            },
            {
              "proName": "FX_IDC:EURUSD",
              "title": "EUR/USD"
            },
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "Bitcoin"
            },
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum"
            }
          ],
          "showSymbolLogo": true,
          "colorTheme": "dark",
          "isTransparent": false,
          "displayMode": "adaptive",
          "locale": "en"
        });

        document.getElementById("myContainer").appendChild(script); 

  }, []);
  

  
    return(
        <>
        <div id="myContainer">
            <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget">

            </div>
            
            </div>
        </div>
        </>
    )
  }
  
export default HeroWidget