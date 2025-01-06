import { ReactElement } from 'react'
import './CalculatorScreen.css'

export default function CalculatorScreen({ text }: { text: string }): ReactElement {
    return (
        <div className="calculator-screen">{ text }</div>
    )
}