import CalculatorButton, { ButtonType } from './components/CalculatorButton/CalculatorButton'

export default function App() {
    return (
        <>
            <CalculatorButton text="C" buttonType={ButtonType.symbols}/>

            <CalculatorButton text="7" buttonType={ButtonType.numeric}/>
        </>
    )
}
