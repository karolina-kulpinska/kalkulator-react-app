import styled from "styled-components";

export const LabelText = styled.span`
    display: block;
    text-align: center;
    width: 100%;
`;

export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.color.pampas};
    padding: 6px;
    width: 100%;
    max-width: 250px;
    border-radius: 5px;
    box-shadow: 3px 2px 6px ${({ theme }) => theme.color.silverRust}, 0 2px 5px;
    margin: 0 auto;
    display: block;
    text-align: center;
`;

export const Select = styled.select` 
    border: 1px solid ${({ theme }) => theme.color.pampas};
    padding: 10px;
    width: 100%;
    max-width: 200px;
    border-radius: 5px;
    box-shadow: 3px 2px 6px ${({ theme }) => theme.color.silverRust}, 0 2px 5px;
    cursor: pointer;
    margin: 0 auto;
    display: block;
    text-align: center; 
    text-align-last: center
`;

export const Button = styled.button`
    width: 100%; 
    max-width: none;
    margin: unset;
    display: block; 
    
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      filter: brightness(110%);
    }

    &:active {
      filter: brightness(120%);
    }
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.color.teal};
    text-align: center;
`;

export const Info = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.teal};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.crimson};
`;


