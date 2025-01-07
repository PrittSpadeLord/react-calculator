import { useState } from 'react'
import CalculatorBackground from './components/CalculatorBackground/CalculatorBackground'
import CalculatorButton, { ButtonType } from './components/CalculatorButton/CalculatorButton'
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen'

export function formatText(text: string): string {
    return text.replace(/\+/g, ' + ').replace(/-/g, ' − ').replace(/\*/g, ' × ').replace(/\//g, ' ÷ ').replace(/=/, '= ')
}

export function appendSymbol(text: string, symbol: string) {
    return text.indexOf('Error') >= 0 ? symbol : text + symbol
}

export function evaluateText(text: string): string {

    try {
        const res: number = eval(text)+0

        if(Number.isNaN(res)) {
            return 'Error'
        }
        else if(!Number.isFinite(res)) {
            return 'Error'
        }

        let result: string = parseFloat(res.toString().slice(0, 13)).toString()

        return result
    }
    catch {
        return 'Error'
    }
}

export default function App() {

    const [text, setText] = useState('')

    return (
        <>
            <CalculatorBackground>
                <CalculatorScreen text={formatText(text)}/>

                <CalculatorButton buttonType={ButtonType.symbols} text={'C'} onClick={() => {setText(text.indexOf('Error') >= 0 ? '' : text.substring(0, text.length - 1))}} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'('} onClick={() => {setText(appendSymbol(text, '('))}}/>
                <CalculatorButton buttonType={ButtonType.symbols} text={')'} onClick={() => {setText(appendSymbol(text, ')'))}} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'÷'} onClick={() => {setText(appendSymbol(text, '/'))}} />

                <CalculatorButton buttonType={ButtonType.numeric} text={'7'} onClick={() => {setText(appendSymbol(text, '7'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'8'} onClick={() => {setText(appendSymbol(text, '8'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'9'} onClick={() => {setText(appendSymbol(text, '9'))}} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'×'} onClick={() => {setText(appendSymbol(text, '*'))}} />

                <CalculatorButton buttonType={ButtonType.numeric} text={'4'} onClick={() => {setText(appendSymbol(text, '4'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'5'} onClick={() => {setText(appendSymbol(text, '5'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'6'} onClick={() => {setText(appendSymbol(text, '6'))}} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'−'} onClick={() => {setText(appendSymbol(text, '-'))}} />

                <CalculatorButton buttonType={ButtonType.numeric} text={'1'} onClick={() => {setText(appendSymbol(text, '1'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'2'} onClick={() => {setText(appendSymbol(text, '2'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} text={'3'} onClick={() => {setText(appendSymbol(text, '3'))}} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'+'} onClick={() => {setText(appendSymbol(text, '+'))}} />

                <CalculatorButton buttonType={ButtonType.symbols} text={'%'} onClick={() => {/*setText(text + '%')*/}}/>
                <CalculatorButton buttonType={ButtonType.numeric} text={'0'} onClick={() => {setText(appendSymbol(text, '0'))}} />
                <CalculatorButton buttonType={ButtonType.symbols} text={'.'} onClick={() => {setText(appendSymbol(text, '.'))}} />
                <CalculatorButton buttonType={ButtonType.equals} text={'='} onClick={() => {setText(evaluateText(text))}} />

            </CalculatorBackground>
        </>
    )
}
