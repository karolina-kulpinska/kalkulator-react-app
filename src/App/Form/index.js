import React, { useState } from "react";
import { Result } from "./Result";
import { Button, Input, Header, Info, LabelText, Select } from "./styled";
import { currencies } from "../currencies";

export const Form = () => {

    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
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

    const onSubmit = (event) => {
        event.preventDefault();
        calculate(currency, amount);
    }

    return (
        <form
            onSubmit={onSubmit}
        >
            <Header>
                Kalkulator walut
            </Header>
            <p>
                <label>
                    <LabelText>Kwota w PLN</LabelText>
                    <Input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Wpisz kwotę w zł"
                        type="number"
                        step="0.01"
                        required
                    />
                </label>
            </p>
            <p>
                <label>
                    <LabelText>Waluta</LabelText>
                    <Select
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
                    </Select>
                </label>
            </p>

            <p>
                <Button>
                    Przelicz
                </Button>
            </p>

            <Info>
                Kursy walut aktualne na dzień 09.11.2025 r. Źródło: NBP.
            </Info>


            <Result result={result} />

        </form>
    );
};