import CalculatorButton, { ButtonType } from './components/CalculatorButton/CalculatorButton'

export default function App() {
    return (
        <>
            <CalculatorButton buttonType={ButtonType.symbols}>C</CalculatorButton>

            <CalculatorButton buttonType={ButtonType.numeric}>7</CalculatorButton>

            <CalculatorButton buttonType={ButtonType.equals}>=</CalculatorButton>

            <CalculatorButton buttonType={ButtonType.numeric}>+/−</CalculatorButton>
        </>
    )
}
