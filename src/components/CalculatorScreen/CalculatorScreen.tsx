import { ReactElement } from 'react'
import './CalculatorScreen.css'

export default function CalculatorScreen({ expression }: { expression: string }): ReactElement {
    return (
        <div className="calculator-screen">{ expression }</div>
    )

    //Usage: <CalculatorScreen text={'9+28'} />
}