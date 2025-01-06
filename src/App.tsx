import CalculatorButton, { ButtonType } from './components/CalculatorButton/CalculatorButton'
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen'

export default function App() {
    return (
        <>
            <CalculatorButton buttonType={ButtonType.symbols}>C</CalculatorButton>

            <CalculatorButton buttonType={ButtonType.numeric}>7</CalculatorButton>

            <CalculatorButton buttonType={ButtonType.equals}>=</CalculatorButton>

            <CalculatorButton buttonType={ButtonType.numeric}>+/&minus;</CalculatorButton>

            <CalculatorScreen text={'9+28'} />
        </>
    )
}
