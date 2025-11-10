import React, { useState } from "react";
import './App.css';
import { Form } from "./Form";
import { currencies } from "./currencies";

function App() {

    const [result, setResult] = useState(null);

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

    return (
        <div className="app">
            <Form
                result={result}
                calculateResult={calculate}
                currencies={currencies}
            />
        </div>
    );
}
export default App;