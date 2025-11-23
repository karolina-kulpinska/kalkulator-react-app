import React, { useState } from "react";
import { Result } from "./Result";
import { Button, Input, Header, Info, LabelText, Select, Loading, Failure, } from "./styled";
import { useRatesData } from "./useRatesData";


export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        if (!ratesData.rates) {
            return;
        }

        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR")
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form
            onSubmit={onSubmit}
        >
            <Header>
                Kalkulator walut
            </Header>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Jeszcze sekund... <br />Ładuję aktualne kursy walut
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Coś poszło nie tak! Spraawdź połączenie z internetem!
                        </Failure>
                    ) : (
                        <>
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
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.rates || {}).map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </Select>
                                </label>
                            </p>

                            <p>
                                <Button>
                                    Przelicz
                                </Button>
                            </p>

                            <Info>
                                Kursy walut aktualne na dzień {ratesData.date}. Źródło: Baza CurrencyAPI
                            </Info>


                            <Result result={result} />
                        </>
                    )
                )}

        </form>
    );
};