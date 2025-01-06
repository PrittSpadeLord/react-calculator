import { ReactElement, ReactNode } from 'react';
import './CalculatorButton.css'

export enum ButtonType {
    numeric = 'numeric',
    symbols = 'symbols',
    equals = 'equals'
}

export default function CalculatorButton({ buttonType, children }: { buttonType: ButtonType, children?: ReactNode}): ReactElement {
    return (
        <button className={`calculator-button calculator-button-${buttonType}`}>{children}</button>
    )

    //Usage: <CalculatorButton buttonType={ButtonType.symbols}>C</CalculatorButton>
}