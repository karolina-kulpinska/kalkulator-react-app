import React, { useState } from "react";
import './App.css';
import { Form } from "./Form";
import { currencies } from "./currencies"; // Zakładamy, że ta ścieżka jest poprawna

function App() {

    const [result, setResult] = useState(null); // Zmieniamy na null dla lepszej obsługi stanu

    const calculate = (currency, amount) => {
        // Zabezpieczamy się przed brakiem waluty (undefined)
        const currencyObject = currencies
            .find(({ short }) => short === currency);

        if (!currencyObject) {
            console.error(`Błąd: Nie znaleziono kursu dla waluty: ${currency}`);
            return;
        }

        const rate = currencyObject.rate;

        // Używamy parseFloat, aby mieć pewność, że kwota jest liczbą
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
                // PRZEKAZUJEMY TABLICĘ WALUT
                currencies={currencies}
            />
        </div>
    );
}
export default App;