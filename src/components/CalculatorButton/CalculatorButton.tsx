import { ReactElement } from 'react';
import './CalculatorButton.css'

export enum ButtonType {
    numeric = 'numeric',
    symbols = 'symbols',
    equals = 'equals'
}

export default function CalculatorButton({ text, buttonType }: { text: string, buttonType: ButtonType}): ReactElement {
    return (
        <div className={`calculator-button calculator-button-${buttonType}`}>{text}</div>
    )
}