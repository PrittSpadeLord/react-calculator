import Calculator from './components/Calculator/Calculator'
import CalculatorButton, { ButtonType } from './components/CalculatorButton/CalculatorButton'
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen'

export default function App() {
    return (
        <>
            <Calculator>
                <CalculatorScreen text={'9+28'}/>

                <CalculatorButton buttonType={ButtonType.symbols}>C</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.symbols}>()</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.symbols}>%</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.symbols}>÷</CalculatorButton>

                <CalculatorButton buttonType={ButtonType.numeric}>7</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.numeric}>8</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.numeric}>9</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.symbols}>×</CalculatorButton>

                <CalculatorButton buttonType={ButtonType.numeric}>4</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.numeric}>5</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.numeric}>6</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.symbols}>−</CalculatorButton>

                <CalculatorButton buttonType={ButtonType.numeric}>1</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.numeric}>2</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.numeric}>3</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.symbols}>+</CalculatorButton>

                <CalculatorButton buttonType={ButtonType.numeric}>+/-</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.numeric}>0</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.numeric}>.</CalculatorButton>
                <CalculatorButton buttonType={ButtonType.equals}>=</CalculatorButton>

            </Calculator>
        </>
    )
}
