import React from "react";

const RateDetail = ({ rate }) => {
    // HTML layout to show rates details
    return (
        <div className="crypto" key={rate[0].symbol}>
            <p className="titleText">{rate[0].name}</p>
            <p className="symbolText">{rate[0].symbol}</p>
            <table>
                <tbody>
                    <tr>
                        <td className="headTd">Provider</td>
                        <td className="dataTd">{rate[0].provider}</td>
                        <td className="dataTd">{rate[1].provider}</td>
                    </tr>
                    <tr>
                        <td className="headTd">Price</td>
                        <td className="dataTd">{rate[0].currency} {rate[0].price}</td>
                        <td className="dataTd">{rate[1].currency} {rate[1].price}</td>
                    </tr>
                    <tr>
                        <td className="headTd">Recommended</td>
                        <td className="dataTd">{rate[0].recommend}</td>
                        <td className="dataTd">{rate[1].recommend}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RateDetail;