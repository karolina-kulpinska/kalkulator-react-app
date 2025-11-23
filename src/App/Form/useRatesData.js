import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
        rates: null,
        date: null,
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_CClkKIPRueTA9Omh7KN3IyrjTd4hAtB2F0kqNc6f&base_currency=PLN")

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const responseData = await response.json();

                const rates = responseData.data;
                const date = responseData.meta.last_updated_at.substring(0, 10);

                const calculatedRates = {};

                for (const currencyShort in rates) {
                    calculatedRates[currencyShort] = 1 / rates[currencyShort].value;
                }

                setRatesData({
                    state: "success",
                    rates: calculatedRates,
                    date,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};