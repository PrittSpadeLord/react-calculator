import { ReactElement, ReactNode } from 'react';
import './CalculatorButton.css'

export enum ButtonType {
    numeric = 'numeric',
    symbols = 'symbols',
    equals = 'equals'
}

export default function CalculatorButton({ buttonType, text, onClick }: { buttonType: ButtonType, text: ReactNode, onClick?: () => void}): ReactElement {
    return (
        <button className={`calculator-button calculator-button-${buttonType}`} onClick={onClick}>{text}</button>
    )
}