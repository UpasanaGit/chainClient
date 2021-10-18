import React from "react";
import axios from "axios";

// import other components
import RateDet from './RatesDet'

// main function for GetRates call
function GetRates() {
    // initialize variables to store values fetched from API - response.data(which is an object so define state {} - react hooks)
    const [rates, setRates] = React.useState({});

    // initialise to handle errors
    let [err, setErr] = React.useState(null);
    let [isLoaded, setIsLoaded] = React.useState(false);

    // provided api url
    const apiUrl = "http://localhost:8080/getRates";

    // call for the API
    React.useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Server responds with the Error!")
                }
                return response.data
            })
            .then(rateResp => {
                setRates(rateResp);
                setIsLoaded(true);
            },
                err => {
                    setErr(err);
                    setIsLoaded(true);
                })
        return () => {
            // clearInterval(interval);
        };
    }, []);

    /* return DOM elements */
    if (err) {
        return <div> {err.message} </div>
    } else if (!isLoaded) {
        return <div> Loading... </div>
    } else {
        return (
            <div className="cryptos">
                <RateDet key="BTC" rate={rates.BTC} />
                <RateDet key="ETH" rate={rates.ETH} />
            </div>
        );
    }
}

export default GetRates;