import { useState } from 'react'
import CalculatorBackground from './components/CalculatorBackground/CalculatorBackground'
import CalculatorButton, { ButtonType } from './components/CalculatorButton/CalculatorButton'
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen'

export default function App() {

    const [text, setText] = useState('')

    function formatText(text: string): string {

        return text.replace(/\+/g, ' + ').replace(/−/g, ' − ').replace(/×/g, ' × ').replace(/÷/g, ' ÷ ')
    }

    return (
        <>
            <CalculatorBackground>
                <CalculatorScreen text={formatText(text)}/>

                <CalculatorButton buttonType={ButtonType.symbols} text={'C'} onClick={() => {setText(text.substring(0, text.length - 1))}} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'()'} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'%'} onClick={() => {setText(text + '%')}} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'÷'} onClick={() => {setText(text + '÷')}} />

                <CalculatorButton buttonType={ButtonType.numeric} text={'7'} onClick={() => {setText(text + '7')}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'8'} onClick={() => {setText(text + '8')}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'9'} onClick={() => {setText(text + '9')}} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'×'} onClick={() => {setText(text + '×')}} />

                <CalculatorButton buttonType={ButtonType.numeric} text={'4'} onClick={() => {setText(text + '4')}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'5'} onClick={() => {setText(text + '5')}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'6'} onClick={() => {setText(text + '6')}} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'−'} onClick={() => {setText(text + '−')}} />

                <CalculatorButton buttonType={ButtonType.numeric} text={'1'} onClick={() => {setText(text + '1')}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'2'} onClick={() => {setText(text + '2')}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'3'} onClick={() => {setText(text + '3')}} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'+'} onClick={() => {setText(text + '+')}} />

                <CalculatorButton buttonType={ButtonType.numeric} text={'+/-'} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'0'} onClick={() => {setText(text + '0')}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'.'} onClick={() => {setText(text + '.')}} />
                <CalculatorButton buttonType={ButtonType.equals} text={'='} />

            </CalculatorBackground>
        </>
    )
}
