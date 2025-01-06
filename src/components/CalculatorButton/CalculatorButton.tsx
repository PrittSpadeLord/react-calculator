import { ReactElement, ReactNode } from 'react';
import './CalculatorButton.css'

export const ButtonType = {
    numeric: 'numeric',
    symbols: 'symbols',
    equals: 'equals'
} as const

type ObjectValues<T> = T[keyof T]
type ButtonType = ObjectValues<typeof ButtonType>

export default function CalculatorButton({ buttonType, text, onClick }: { buttonType: ButtonType, text: ReactNode, onClick?: () => void}): ReactElement {
    return (
        <button className={`calculator-button calculator-button-${buttonType}`} onClick={onClick}>{text}</button>
    )
}