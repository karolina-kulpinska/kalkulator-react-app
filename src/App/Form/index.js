import React, { useState } from "react";
import { Result } from "./Result";
import "./style.css";

// Stałe kursy walut
const currencies = [
    { short: "EUR", rate: 4.30, name: "Euro" },
    { short: "USD", rate: 3.90, name: "Dolar amerykański" },
    { short: "CHF", rate: 4.45, name: "Frank szwajcarski" },
];

export const Form = () => {
    // 🛑 HOOKI useState MUSZĄ BYĆ WEWNĄTRZ FUNKCJI KOMPONENTU!
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null); // Stan do przechowywania wyniku

    const calculate = (currency, amount) => {
        const currencyObject = currencies
            .find(({ short }) => short === currency);

        if (!currencyObject) {
            console.error(`Błąd: Nie znaleziono kursu dla waluty: ${currency}`);
            return;
        }

        const rate = currencyObject.rate;

        setResult({
            sourceAmount: parseFloat(amount),
            targetAmount: parseFloat(amount) / rate,
            currency,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        calculate(currency, amount); // Wywołujemy LOKALNĄ funkcję calculate
    }

    return (
        <form
            className="form"
            onSubmit={onSubmit}
        >
            <h1 className="form__header">Kalkulator walut</h1>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota w PLN
                    </span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Wpisz kwotę w zł"
                        className="form__input"
                        type="number"
                        step="0.01"
                        required
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">Waluta</span>
                    <select
                        className="form__field"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency) => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        ))}
                    </select>
                </label>
            </p>

            <p>
                <button className="form__button">Przelicz</button>
            </p>

            <p className="form__info">
                Kursy walut aktualne na dzień 09.11.2025 r. Źródło: NBP.
            </p>


            <Result result={result} />

        </form>
    );
};