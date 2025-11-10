import React from "react";
import './style.css';

export const Result = ({ result }) => {
    if (!result) {
        return null;
    }

    return (
        <div className="result__container">
            <p>
                Wynik:
                <strong>
                    {result.sourceAmount.toFixed(2)} PLN = {result.targetAmount.toFixed(2)} {result.currency}
                </strong>
            </p>
        </div>
    );
};