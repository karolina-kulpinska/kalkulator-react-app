import React from "react";
import { Wrapper } from "./styled";

export const Result = ({ result }) => {
    if (!result) {
        return null;
    }

    return (
        <Wrapper>
            <p>
                Wynik:
                <strong>
                    {result.sourceAmount.toFixed(2)} PLN = {result.targetAmount.toFixed(2)} {result.currency}
                </strong>
            </p>
        </Wrapper>
    );
};