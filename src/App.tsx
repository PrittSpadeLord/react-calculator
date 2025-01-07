import { useState } from 'react'
import CalculatorBackground from './components/CalculatorBackground/CalculatorBackground'
import CalculatorButton, { ButtonType } from './components/CalculatorButton/CalculatorButton'
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen'

export function formatExpression(expression: string): string {
    return expression.replace(/\+/g, ' + ').replace(/-/g, ' − ').replace(/\*/g, ' × ').replace(/\//g, ' ÷ ').replace(/=/, '= ')
}

export function appendSymbol(expression: string, symbol: string) {
    return expression.indexOf('Error') >= 0 ? symbol : expression + symbol
}

export function evaluateExpression(expression: string): string {

    try {
        const res: number = eval(expression)+0

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

    const [expression, setExpression] = useState('')

    return (
        <>
            <CalculatorBackground>
                <CalculatorScreen expression={formatExpression
                (expression)}/>

                <CalculatorButton buttonType={ButtonType.symbols} expression={'C'} onClick={() => {setExpression(expression.indexOf('Error') >= 0 ? '' : expression.substring(0, expression.length - 1))}} />
                <CalculatorButton buttonType={ButtonType.symbols} expression={'('} onClick={() => {setExpression(appendSymbol(expression, '('))}}/>
                <CalculatorButton buttonType={ButtonType.symbols} expression={')'} onClick={() => {setExpression(appendSymbol(expression, ')'))}} />
                <CalculatorButton buttonType={ButtonType.symbols} expression={'÷'} onClick={() => {setExpression(appendSymbol(expression, '/'))}} />

                <CalculatorButton buttonType={ButtonType.numeric} expression={'7'} onClick={() => {setExpression(appendSymbol(expression, '7'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} expression={'8'} onClick={() => {setExpression(appendSymbol(expression, '8'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} expression={'9'} onClick={() => {setExpression(appendSymbol(expression, '9'))}} />
                <CalculatorButton buttonType={ButtonType.symbols} expression={'×'} onClick={() => {setExpression(appendSymbol(expression, '*'))}} />

                <CalculatorButton buttonType={ButtonType.numeric} expression={'4'} onClick={() => {setExpression(appendSymbol(expression, '4'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} expression={'5'} onClick={() => {setExpression(appendSymbol(expression, '5'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} expression={'6'} onClick={() => {setExpression(appendSymbol(expression, '6'))}} />
                <CalculatorButton buttonType={ButtonType.symbols} expression={'−'} onClick={() => {setExpression(appendSymbol(expression, '-'))}} />

                <CalculatorButton buttonType={ButtonType.numeric} expression={'1'} onClick={() => {setExpression(appendSymbol(expression, '1'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} expression={'2'} onClick={() => {setExpression(appendSymbol(expression, '2'))}} />
                <CalculatorButton buttonType={ButtonType.numeric} expression={'3'} onClick={() => {setExpression(appendSymbol(expression, '3'))}} />
                <CalculatorButton buttonType={ButtonType.symbols} expression={'+'} onClick={() => {setExpression(appendSymbol(expression, '+'))}} />

                <CalculatorButton buttonType={ButtonType.symbols} expression={'%'} onClick={() => {/*setExpression(expression + '%')*/}}/>
                <CalculatorButton buttonType={ButtonType.numeric} expression={'0'} onClick={() => {setExpression(appendSymbol(expression, '0'))}} />
                <CalculatorButton buttonType={ButtonType.symbols} expression={'.'} onClick={() => {setExpression(appendSymbol(expression, '.'))}} />
                <CalculatorButton buttonType={ButtonType.equals} expression={'='} onClick={() => {setExpression(evaluateExpression(expression))}} />

            </CalculatorBackground>
        </>
    )
}
