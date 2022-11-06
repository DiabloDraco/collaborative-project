import './heroWidget.css';
import {Helmet} from "react-helmet";

function HeroWidget() {

    return(
        
        <>
            <div>
            <Helmet>   
                <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                {` 
                    {
                    "symbols": [
                        {
                        "description": "",
                        "proName": "NYSE:BABA"
                        },
                        {
                        "description": "",
                        "proName": "HKEX:MIU1!"
                        },
                        {
                        "description": "",
                        "proName": "NIKKEI"
                        },
                        {
                        "description": "",
                        "proName": "NSE:NIFTY"
                        },
                        {
                        "description": "",
                        "proName": "TVC:HSI"
                        },
                        {
                        "description": "",
                        "proName": "NYSE:MUFG"
                        }
                    ],
                    "showSymbolLogo": true,
                    "colorTheme": "light",
                    "isTransparent": false,
                    "displayMode": "adaptive",
                    "locale": "en"
                    }
                `}
                </script>
            </Helmet>
            </div>
        </>
    )
}

export default HeroWidget